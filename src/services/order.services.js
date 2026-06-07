import OrderModel from "../models/Order.model";

const dbGetOrders = async () => {
  return await OrderModel.find();
};

export { dbGetOrders };
