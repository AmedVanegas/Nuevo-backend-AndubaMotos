//Este archivo tiene la funcion de hablar con la base de datos
import Usermodel from "../models/User.model.js";

const insertUser = async (newUser) => {
  return await Usermodel.create(newUser);
};

const dbGetUsers = async () => {
  return await Usermodel.find();
};

const dbGetUsersbyId = async (userID) => {
  return await Usermodel.findOne({ _id: userID });
};

const dbDeleteuser = async (userID) => {
  return await Usermodel.findByIdAndDelete(userID);
  return await Usermodel.findOneAndDelete({ _id: userID });
};

const dbUpdateUser = async (userID, updateData) => {
  return await Usermodel.findByIdAndUpdate(userID, updateData, {
    returnDocument: "after",
  });
};

const dbGetUserbyUsername = async (username) => {
  if (!username) {
    throw new Error("Ingrese su Username");
  }
  return await Usermodel.findOne({ username: username, status:'active' },);
};

export {
  insertUser,
  dbGetUsers,
  dbDeleteuser,
  dbUpdateUser,
  dbGetUsersbyId,
  dbGetUserbyUsername,
};

