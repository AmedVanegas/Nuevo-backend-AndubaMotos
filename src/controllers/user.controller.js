import {
  dbDeleteuser,
  dbGetUsers,
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

function patchUsers(req, res) {
  res.json({
    msg: "editar usuarios",
  });
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
    console.log(error)
    res.status(500).json({
      msg:"no se pudo eliminar el usuario"
    })
  }
}

export { getUsers, createUsers, deleteUsers, patchUsers };
