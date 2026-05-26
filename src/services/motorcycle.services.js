import { model } from "mongoose";
import MotorcycleModel from "../models/Motorcycle.model.js";

const registerMotorcycle = async (newMotorcycle)=>{

    return await MotorcycleModel.create(newMotorcycle)



}

const dbGetMotorcycles = async()=> {

    return await MotorcycleModel.find()


}

export {registerMotorcycle, dbGetMotorcycles}