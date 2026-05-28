import { Schema, model } from "mongoose";

//1ra parte: definir el esquema

const productSchema = new Schema(
  {
    name: {
      type: String,
      required: true,
      trim: true,
    },
    nr:{
      type: String,
      required: true,
      unique:true
    },

    description: String,
    price: {
      type: Number,
      default: 0,
      min: 0,
    },
    marcaMotocicleta: {
      type: String,
      required: true,
      maxlength: 15

    },
    stock: {
      type: Number,
      default: 1,
      min: 1,
    },
    status: {
      type: String,
      enum: ["disponible", "no disponible", "refactorizado", "pendiente"],
      default: "disponible",
    },
  },
  {
    versionKey:false,
    timestamps:true
  },
);

//2da parte: definir el modelo

const ProductModel = model(
  "products", // define el nombre de la coleccion que almacenara el objeto creado con este Schema
  productSchema, // asocia la estructura de datos a la coleccion
);

export default ProductModel;
