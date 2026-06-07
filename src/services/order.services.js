import OrderModel from "../models/Order.model.js";

const dbGetOrders = async () => {
  return await OrderModel.find();
};

const dbGetOrdersbyUserID = async (userID) => {
  return await OrderModel.find({ user: userID });
};

const dbGetOrdersbyID = async (orderID )=>{
  return await OrderModel.findById(orderID)
}

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
export {
  dbGetOrders,
  dbCreateOrder,
  dbGetOrdersbyUserID,
  dbDeleteAllOrdersbyUserID,
  dbDeleteOrder,
  dbUpdateOrders,
  dbGetOrdersbyID
};
