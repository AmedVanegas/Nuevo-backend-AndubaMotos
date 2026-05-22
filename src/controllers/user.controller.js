import { insertUser } from "../services/user.service.js";

function getUsers(req, res) {
  res.json({
    msg: "listar todos los usuarios",
  });
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
function deleteUsers(req, res) {
  res.json({
    msg: "eliminar usuario",
  });
}

export { getUsers, createUsers, deleteUsers, patchUsers };
