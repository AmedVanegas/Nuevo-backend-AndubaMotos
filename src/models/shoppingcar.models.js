import { Schema, model } from "mongoose";

const shoppingcarSchema = new Schema(
  {
    user: {
      type: Schema.Types.ObjectId,
      ref: "users",
    },

    price: {
      type: Number,
      min: 0,
      default: 0,
    },

    description: {
      type: String,
      trim: true,
      minlength: 7,
      maxlength: 500,
    },

    products: [
      {
        type: Schema.Types.ObjectId,
        ref: "products",
        required: true,
      },
    ],
  },

  {
    versionKey: false,
    timestamps: true,
  },
);

const shoppingcarmodel = model(
  "shoppingcar", // define el nombre de la coleccion que almacenara el objeto creado con este Schema
  shoppingcarSchema, // asocia la estructura de datos a la coleccion
);

export default shoppingcarmodel;
