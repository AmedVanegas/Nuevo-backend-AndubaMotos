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

    const user = await dbGetUsersbyId(userID);

    res.json({
      msg: "Usuario",
      user: user,
    });
  } catch (error) {

    console.log(error)
    res.status(500).json({

      msg:"No se pudo obtener el usuario"


    })
  }
}

async function patchUsers(req, res) {
  try {
    const id = req.params.userID;

    const updateData = req.body;

    const updated = await dbUpdateUser(id, updateData);

    res.json({
      msg: "Usuario editado",
      user: updated,
    });
  } catch (error) {
    console.log(error);

    res.status(500).json({
      msg: "No se pudo actualizar",
    });
  }
}

async function createUsers(req, res) {
  try {
    const inputData = req.body; //Objeto JSON eviado en el request

    const createdUser = await insertUser(inputData); //registra el usuario y guarda los datos en la variable

    res.status(201).json({
      createdUser: createdUser, //muestra el objeto JSON en la propiedad de inputData
    });
  } catch (error) {
    console.error(error); //respuesta consola

    res.status(500).json({
      msg: "no se pudo registar el usuario", //respuesta al cliente
    });
  }
}
async function deleteUsers(req, res) {
  try {
    const id = req.params.userID;

    const deletedUser = await dbDeleteuser(id);

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

export { getUsers, createUsers, deleteUsers, patchUsers, getUsersbyId};
