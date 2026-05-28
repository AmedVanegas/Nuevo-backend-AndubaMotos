import { model } from "mongoose";
import MotorcycleModel from "../models/Motorcycle.model.js";

const registerMotorcycle = async (newMotorcycle) => {
  return await MotorcycleModel.create(newMotorcycle);
};

const dbGetMotorcycleById = async (motorcycleId) => {
  return await MotorcycleModel.findOne({ _id: motorcycleId });
};
const dbGetMotorcycles = async () => {
  return await MotorcycleModel.find();
};

const dbDeleteMotorcycle = async (motorcycleId) => {
  return await MotorcycleModel.findByIdAndDelete(motorcycleId);
};

const dbUpdateMotorcycle = async (motorcycleId, updateData) => {
  return await MotorcycleModel.findByIdAndUpdate(motorcycleId, updateData, {
    returnDocument: "after",
  });
};

export {
  registerMotorcycle,
  dbGetMotorcycles,
  dbDeleteMotorcycle,
  dbUpdateMotorcycle,
  dbGetMotorcycleById,
};
