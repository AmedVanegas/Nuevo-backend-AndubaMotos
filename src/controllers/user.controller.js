import Usermodel from "../models/user.model.js";

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
  const inputData = req.body; //Objeto JSON eviado en el request



 const createdUser = await Usermodel.create(inputData); //registra el usuario y guarda los datos en la variable

  res.json({
    createdUser:createdUser//muestra el objeto JSON en la propiedad de inputData
  });
}
function deleteUsers(req, res) {
  res.json({
    msg: "eliminar usuario",
  });
}

export { getUsers, createUsers, deleteUsers, patchUsers };
