import { Schema, model } from "mongoose";

//1ra parte: definir el esquema

const productSchema = new Schema(
  {
    name: {
      type: String,
      required: [true, "Tiene que ingresar un nombre"],
      trim: true,
      unique: true,
    },
    nr: {
      type: String,
      required: true,
      unique: true,
    },
    category: {
      type: Schema.Types.ObjectId,
      ref: "categories",
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
      type: String,
      enum: ["disponible", "no disponible", "refactorizado", "pendiente"],
      default: "disponible",
    },
    reviews: [
      {
        type: Schema.Types.ObjectId,
        ref: "reviews",
      },
    ],
    avgStars: {
      type: Number,
      default: 0,
      min: 0,
      max: 5,
    },

    createdBy:{
      type:Schema.Types.ObjectId,
      ref:'users',
      required:true
    }

  },
  {
    versionKey: false,
    timestamps: true,
  },
);

//2da parte: definir el modelo

const ProductModel = model(
  "products", // define el nombre de la coleccion que almacenara el objeto creado con este Schema
  productSchema, // asocia la estructura de datos a la coleccion
);

export default ProductModel;
