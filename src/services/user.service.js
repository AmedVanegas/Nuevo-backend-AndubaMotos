//Este archivo tiene la funcion de hablar con la base de datos
import Usermodel from "../models/user.model.js";

const insertUser = async (newUser)=> {

    return await Usermodel.create(newUser); 
}


const dbGetUsers = async ()=> {

    return await Usermodel.find()


}


export{
    insertUser, dbGetUsers
}