import HistoryModel from "../models/History.model.js";

const dbgetHistorybyId = async (userID) => {
  return await HistoryModel.findOne({ user: userID })
    .populate({ path: "products", select: "total status createdAt products" })
    .populate({ path: "services", select: "name finalCost description createdAt" });
};

const dbGetHistories = async () => {
  return await HistoryModel.find();
};

const dbUpdateHistory = async (id, updateData) => {
  return await HistoryModel.findOneAndUpdate({ user: id }, updateData, {
    returnDocument: "after",
    upsert: true,
  });
};

const dbDeleteHistory = async (userID) => {
  return await HistoryModel.findOneAndDelete({ user: userID });
};

const dbCreateHistory = async (history) => {
  return await HistoryModel.create(history);
};

export {
  dbgetHistorybyId,
  dbCreateHistory,
  dbDeleteHistory,
  dbUpdateHistory,
  dbGetHistories,
};
