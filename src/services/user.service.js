//Este archivo tiene la funcion de hablar con la base de datos
import Usermodel from "../models/User.model.js";

const insertUser = async (newUser) => {
  return await Usermodel.create(newUser);
};

const dbGetUsers = async () => {
  return await Usermodel.find();
};

const dbDeleteuser = async (userID) => {
  return await Usermodel.findByIdAndDelete(userID);
  return await Usermodel.findOneAndDelete({ _id: userID });
};

export { insertUser, dbGetUsers, dbDeleteuser };
