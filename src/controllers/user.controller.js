import mongoose from "mongoose";
import {
  dbDeleteuser,
  dbGetUsers,
  dbGetUsersbyId,
  dbUpdateUser,
  insertUser,
} from "../services/user.service.js";

async function getUsers(req, res) {
  try {
    const data = await dbGetUsers();

    if (!data || data.length === 0) {
      return res.status(400).json({
        msg: "No hay usuarios registrados",
      });
    }

    res.json({
      msg: "lista de todos los usuarios",
      data: data,
    });
  } catch (error) {
    console.log(error);
    res.status(500).json({
      msg: "No se pudo obtener los usuarios",
    });
  }
}

async function getUsersbyId(req, res) {
  try {
    const userID = req.params.userID;

    if (!mongoose.Types.ObjectId.isValid(userID)) {
      return res.status(400).json({
        msg: "Ingrese un Id valido",
      });
    }

    const user = await dbGetUsersbyId(userID);

    if (!user) {
      return res.status(400).json({
        msg: "El usuario no existe",
      });
    }

    res.json({
      msg: "Usuario",
      user: user,
    });
  } catch (error) {
    console.log(error);
    res.status(500).json({
      msg: "No se pudo obtener el usuario",
    });
  }
}

async function patchUsers(req, res) {
  try {
    const id = req.params.userID;

    const updateData = req.body;

    if (!updateData) {
      return res.status(400).json({
        msg: "Tiene que ingresar por lo menos 1 dato para actualizar el usuario",
      });
    }

    const updated = await dbUpdateUser(id, updateData);

    if (!updated) {
      throw new Error("El usuario no existe");
    }

    res.json({
      msg: "Usuario editado",
      user: updated,
    });
  } catch (error) {
    console.log(error);

    if (error.name === "CastError") {
      return res.status(400).json({
        msg: "Ingrese un Id valido",
      });
    }

    if (error.message.includes("El usuario no existe")) {
      return res.status(400).json({
        msg: error.message,
      });
    }
    res.status(500).json({
      msg: "No se pudo actualizar el usuario",
    });
  }
}

async function createUsers(req, res) {
  try {
    const inputData = req.body; //Objeto JSON eviado en el request

    if (!inputData) {
      return res.status(400).json({
        msg: "Tiene que ingresar datos para crear el usuario",
      });
    }

    const createdUser = await insertUser(inputData); //registra el usuario y guarda los datos en la variable

    res.status(201).json({
      createdUser: createdUser, //muestra el objeto JSON en la propiedad de inputData
    });
  } catch (error) {
    console.error(error); //respuesta consola

    if (error.code === 11000) {
      const repeatedValue = Object.entries(error.keyValue);

      return res.status(400).json({
        msg: "Ingrese un usuario sin repetir lo siguientes datos:",
        repeatedValue: repeatedValue,
      });
    }

    res.status(500).json({
      msg: "No se pudo registar el usuario", //respuesta al cliente
    });
  }
}
async function deleteUsers(req, res) {
  try {
    const id = req.params.userID;

    if (!mongoose.Types.ObjectId.isValid(id)) {
      return res.status(400).json({
        msg: "Ingrese un Id valido",
      });
    }

    const deletedUser = await dbDeleteuser(id);

    if (!deletedUser) {
      return res.status(400).json({
        msg: "El usuario no existe",
      });
    }

    res.json({
      msg: "Usuario eliminado",
      deleted_user: deletedUser,
    });
  } catch (error) {
    console.log(error);
    res.status(500).json({
      msg: "no se pudo eliminar el usuario",
    });
  }
}

export { getUsers, createUsers, deleteUsers, patchUsers, getUsersbyId };
