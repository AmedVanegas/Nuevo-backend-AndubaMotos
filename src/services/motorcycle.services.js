import { model } from "mongoose";
import MotorcycleModel from "../models/Motorcycle.model.js";

const registerMotorcycle = async (newMotorcycle)=>{

    return await MotorcycleModel.create(newMotorcycle)



}

export {registerMotorcycle}