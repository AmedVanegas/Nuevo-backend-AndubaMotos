import mongoose from "mongoose";
import {
  dbGetOrders,
  dbGetOrdersbyUserID,
  dbCreateOrder,
  dbUpdateOrders,
  dbDeleteOrder,
  dbDeleteAllOrdersbyUserID,
  dbGetOrdersbyID,
} from "../services/order.services.js";

const getOrders = async (req, res) => {
  try {
    const data = await dbGetOrders();
    res.json({
      msg: "Órdenes obtenidas",
      data: data,
    });
  } catch (error) {
    console.error(error);
    res.status(500).json({ msg: "Error al obtener las órdenes" });
  }
};

const getOrdersByUserId = async (req, res) => {
  try {
    const userID = req.params.userID;

    if (!mongoose.Types.ObjectId.isValid(userID)) {
      return res.status(400).json({ msg: "ID de usuario inválido" });
    }

    const data = await dbGetOrdersbyUserID(userID);

    if (!data) {
      return res
        .status(404)
        .json({ msg: "No se encontraron órdenes para este usuario" });
    }

    res.json({
      msg: "Órdenes del usuario obtenidas",
      data: data,
    });
  } catch (error) {
    console.error(error);
    res.status(500).json({ msg: "Error al obtener las órdenes del usuario" });
  }
};

const getOrderByID = async (req, res) => {
  try {
    const orderID = req.params.orderID;

    if (!mongoose.Types.ObjectId.isValid(orderID)) {
      return res.status(400).json({ msg: "ID de orden inválido" });
    }

    const order = await dbGetOrdersbyID(orderID);

    if (!order) {
      return res.status(404).json({ msg: "La orden no existe" });
    }

    res.json({
      msg: "order",
      order: order,
    });
  } catch (error) {
    console.log(error);

    res.status(500).json({
      msg: "No se pudo obtener la orden",
    });
  }
};
const createOrder = async (req, res) => {
  try {
    const inputData = req.body;
    const order = await dbCreateOrder(inputData);

    res.status(201).json({
      msg: "Orden creada exitosamente",
      data: order,
    });
  } catch (error) {
    console.error(error);
    res.status(500).json({ msg: "Error al crear la orden" });
  }
};

const updateOrder = async (req, res) => {
  try {
    const orderID = req.params.orderID;
    const inputData = req.body;

    if (!mongoose.Types.ObjectId.isValid(orderID)) {
      return res.status(400).json({ msg: "ID de orden inválido" });
    }

    const data = await dbUpdateOrders(orderID, inputData);

    if (!data) {
      return res.status(404).json({ msg: "Orden no encontrada" });
    }

    res.json({
      msg: "Orden actualizada",
      data: data,
    });
  } catch (error) {
    console.error(error);
    res.status(500).json({ msg: "Error al actualizar la orden" });
  }
};

const deleteOrder = async (req, res) => {
  try {
    const orderID = req.params.orderID;

    if (!mongoose.Types.ObjectId.isValid(orderID)) {
      return res.status(400).json({ msg: "ID de orden inválido" });
    }

    const data = await dbDeleteOrders(orderID);

    if (!data) {
      return res.status(404).json({ msg: "Orden no encontrada" });
    }

    res.json({
      msg: "Orden eliminada",
      data: data,
    });
  } catch (error) {
    console.error(error);
    res.status(500).json({ msg: "Error al eliminar la orden" });
  }
};

const deleteAllOrdersByUserId = async (req, res) => {
  try {
    const userID = req.params.userID;

    if (!mongoose.Types.ObjectId.isValid(userID)) {
      return res.status(400).json({ msg: "ID de usuario inválido" });
    }

    const result = await dbDeleteAllOrdersByUserID(userID);

    if (result.deletedCount === 0) {
      return res.status(404).json({
        msg: "No se encontraron órdenes para eliminar de este usuario",
      });
    }

    res.json({
      msg: "Todas las órdenes del usuario fueron eliminadas",
      info: `${result.deletedCount} órdenes borradas.`,
    });
  } catch (error) {
    console.error(error);
    res.status(500).json({ msg: "Error al eliminar las órdenes del usuario" });
  }
};

export {
  getOrders,
  getOrdersByUserId,
  createOrder,
  updateOrder,
  deleteOrder,
  deleteAllOrdersByUserId,
  getOrderByID
};
