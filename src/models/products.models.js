import { Schema, model } from "mongoose";

//1ra parte: definir el esquema

const productSchema = new mongoose.Schema(
  {
    name: {
      type: String,
      required: true,
      minlength: 12,
      trim: true,
    },

    description: String,
    price: {
      type: Number,
      default: 0,
      min: 0,
    },
    stock: {
      type: Number,
      default: 1,
      min: 1,
    },
    status: {
      typr: String,
      enum: ["disponible", "no disponible", "refactorizado", "pendiente"],
      default: "disponible",
    },
  },
  {},
);

//2da parte: definir el modelo

const productModel = model(
  "products", // define el nombre de la coleccion que almacenara el objeto creado con este Schema
  productSchema, // asocia la estructura de datos a la coleccion
);

export default productModel;
