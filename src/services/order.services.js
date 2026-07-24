import OrderModel from "../models/Order.model.js";
import mongoose from "mongoose";
import { decrementStockForItems } from "./product.service.js";


const dbGetOrders = async () => {
  return await OrderModel.find();
};

const dbGetOrdersbyUserID = async (userID) => {
  return await OrderModel.find({ user: userID });
};

const dbGetOrdersbyID = async (orderID) => {
  return await OrderModel.findById(orderID);
};

const dbDeleteOrder = async (orderID) => {
  return await OrderModel.findByIdAndDelete(orderID);
};

const dbUpdateOrders = async (orderID, updateData) => {
  return await OrderModel.findByIdAndUpdate(orderID, updateData, { new: true });
};

const dbCreateOrder = async (data) => {
  return await OrderModel.create(data);
};

const dbDeleteAllOrdersbyUserID = async (userID) => {
  return await OrderModel.deleteMany({ user: userID });
};
const dbCreateOrderWithStock = async (newOrder) => {
  const session = await mongoose.startSession();

  try {
    session.startTransaction();

    await decrementStockForItems(newOrder.products, session);

    const [order] = await OrderModel.create([newOrder], { session });

    await session.commitTransaction();
    return order;
  } catch (error) {
    await session.abortTransaction();
    throw error;
  } finally {
    session.endSession();
  }
};

export {
  dbGetOrders,
  dbCreateOrder,
  dbGetOrdersbyUserID,
  dbDeleteAllOrdersbyUserID,
  dbDeleteOrder,
  dbUpdateOrders,
  dbGetOrdersbyID,
  dbCreateOrderWithStock
};
