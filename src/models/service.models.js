import { Schema, model } from "mongoose";

//1ra parte: definir el esquema

const serviceSchema = new Schema(
  {
    name: {
      type: String,
      required: true,
      trim: true,
    },
    nr:{
      type: String,
      required: true
    },

    description: String,
    price: {
      type: Number,
      default: 0,
      min: 0,
    },
    descripcion: {
      type: String,
      required: true,
      minlength: 7

    },
    id_empleado: {
      type: Number,
      default: 1,
      min: 1,
    },
    
  },
  {
    versionKey:false,
    timestamps:true
  },
);

//2da parte: definir el modelo

const servicemodel = model(
  "services", // define el nombre de la coleccion que almacenara el objeto creado con este Schema
  serviceSchema, // asocia la estructura de datos a la coleccion
);

export default servicemodel;