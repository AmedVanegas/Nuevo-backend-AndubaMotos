//Este archivo tiene la funcion de hablar con la base de datos
import Usermodel from "../models/user.model.js";

const insertUser = async (newUser)=> {

    return await Usermodel.create(newUser); 
}


export{
    insertUser
}