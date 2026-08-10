import OrderModel from "../models/Order.model.js";
import ServiceRecordModel from "../models/ServiceRecord.model.js";
import { CONFIRMED_ORDER_STATUSES } from "../config/global.config.js";

// Todo lo que tiene que ver con "ganancias" sale del ROI del producto:
// unitPrice (lo que pagó el cliente, guardado en la orden) ya trae el
// ROI incluido -> unitPrice = price * (1 + roi). La ganancia por línea
// es unitPrice - unitCost, donde unitCost es el costo (price) de ESE
// producto congelado en el momento exacto de la venta (ver
// decrementStockForItems en product.service.js) — así que el ROI de
// cada producto se toma individualmente, y si su price/roi cambia
// después, las ventas ya hechas no se ven afectadas.
//
// El $lookup a "products" acá adentro es solo un respaldo para órdenes
// viejas de antes de que existiera unitCost: si una línea no lo tiene,
// se aproxima con el price ACTUAL del producto en vez de quedar en 0.
const getOrdersBreakdown = async () => {
  const [result] = await OrderModel.aggregate([
    { $match: { status: { $ne: "canceled" } } },
    {
      $facet: {
        confirmed: [
          { $match: { status: { $in: CONFIRMED_ORDER_STATUSES } } },
          { $unwind: "$products" },
          {
            // Solo hace falta el $lookup como respaldo para órdenes viejas
            // que se crearon antes de que existiera unitCost. Las nuevas
            // ya traen su costo congelado y no dependen de este lookup.
            $lookup: {
              from: "products",
              localField: "products.product",
              foreignField: "_id",
              as: "productInfo",
            },
          },
          { $unwind: { path: "$productInfo", preserveNullAndEmptyArrays: true } },
          {
            $addFields: {
              lineUnitCost: {
                $ifNull: ["$products.unitCost", { $ifNull: ["$productInfo.price", 0] }],
              },
            },
          },
          {
            // Primero agrupamos por orden para no sumar "total" una vez
            // por cada producto de la orden (eso duplicaría la venta).
            $group: {
              _id: "$_id",
              total: { $first: "$total" },
              lineCost: {
                $sum: { $multiply: ["$products.quantity", "$lineUnitCost"] },
              },
              lineItems: { $sum: "$products.quantity" },
            },
          },
          {
            $group: {
              _id: null,
              totalSales: { $sum: "$total" },
              totalCost: { $sum: "$lineCost" },
              itemsSold: { $sum: "$lineItems" },
              ordersCount: { $sum: 1 },
            },
          },
        ],
        pending: [
          { $match: { status: "pending" } },
          {
            $group: {
              _id: null,
              pendingRevenue: { $sum: "$total" },
              pendingOrdersCount: { $sum: 1 },
            },
          },
        ],
        topProducts: [
          { $match: { status: { $in: CONFIRMED_ORDER_STATUSES } } },
          { $unwind: "$products" },
          {
            $group: {
              _id: "$products.product",
              unitsSold: { $sum: "$products.quantity" },
              revenue: {
                $sum: { $multiply: ["$products.quantity", "$products.unitPrice"] },
              },
            },
          },
          { $sort: { unitsSold: -1 } },
          { $limit: 5 },
          {
            $lookup: {
              from: "products",
              localField: "_id",
              foreignField: "_id",
              as: "product",
            },
          },
          { $unwind: "$product" },
          {
            $project: {
              _id: 0,
              productId: "$_id",
              name: "$product.name",
              unitsSold: 1,
              revenue: 1,
            },
          },
        ],
      },
    },
  ]);

  const confirmed = result.confirmed[0] ?? {
    totalSales: 0,
    totalCost: 0,
    itemsSold: 0,
    ordersCount: 0,
  };
  const pending = result.pending[0] ?? { pendingRevenue: 0, pendingOrdersCount: 0 };

  return {
    products: {
      sales: confirmed.totalSales,
      cost: confirmed.totalCost,
      profit: confirmed.totalSales - confirmed.totalCost,
      itemsSold: confirmed.itemsSold,
      ordersCount: confirmed.ordersCount,
    },
    pending,
    topProducts: result.topProducts,
  };
};

// finalCost es lo que se le cobró al cliente por el servicio completo
// (mano de obra + repuestos). Le restamos el costo de los productos
// usados (a precio actual) para separar cuánto de eso fue ganancia
// pura vs. costo de materiales.
const getServicesBreakdown = async () => {
  const [result] = await ServiceRecordModel.aggregate([
    { $unwind: { path: "$usedProducts", preserveNullAndEmptyArrays: true } },
    {
      $lookup: {
        from: "products",
        localField: "usedProducts.product",
        foreignField: "_id",
        as: "productInfo",
      },
    },
    { $unwind: { path: "$productInfo", preserveNullAndEmptyArrays: true } },
    {
      $group: {
        _id: "$_id",
        finalCost: { $first: "$finalCost" },
        materialsCost: {
          $sum: {
            $multiply: [
              { $ifNull: ["$usedProducts.quantity", 0] },
              { $ifNull: ["$productInfo.price", 0] },
            ],
          },
        },
      },
    },
    {
      $group: {
        _id: null,
        revenue: { $sum: "$finalCost" },
        materialsCost: { $sum: "$materialsCost" },
        count: { $sum: 1 },
      },
    },
  ]);

  const services = result ?? { revenue: 0, materialsCost: 0, count: 0 };

  return {
    revenue: services.revenue,
    materialsCost: services.materialsCost,
    profit: services.revenue - services.materialsCost,
    count: services.count,
  };
};

const dbGetSalesSummary = async () => {
  const [orders, services] = await Promise.all([
    getOrdersBreakdown(),
    getServicesBreakdown(),
  ]);

  return {
    totalSales: orders.products.sales + services.revenue,
    totalProfit: orders.products.profit + services.profit,
    itemsSold: orders.products.itemsSold,
    ordersCount: orders.products.ordersCount,
    pendingRevenue: orders.pending.pendingRevenue,
    pendingOrdersCount: orders.pending.pendingOrdersCount,
    products: orders.products,
    services,
    topProducts: orders.topProducts,
  };
};

export { dbGetSalesSummary };
