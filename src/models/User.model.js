import { Schema, model } from "mongoose";

// 1. Definir esquema

const UserSchema = new Schema(
  {
    username: {
      type: String,
      required: true,
      trim: true,
    },
    document: {
      type: String,
      required: true,
      maxlength: 16,
    },
    phoneNumber: {
      type: String,
      required: true,
      maxlength: 13,
    },
    email: {
      type: String,
      unique: true,
      required: true,
    },
    password: {
      type: String,
      required: true,
    },
    rol: {
      type: String,
      enum: ["client", "admin", "seller"],
      default: "client",
    },
    address: {
      street: {
        type: String,
        required: true,
      },
      carrera: {
        type: String,
        required: true,
      },
      neighborhood: {
        type: String,
      },
      city: {
        type: String,
        required: true,
      },
      department: {
        type: String,
        required: true,
      },
    },
    birthDate: {
      type: Date,
    },
    status:{
        enum:['active','inactive','banned'],
        type:String,
        deafult:'active'
    }

    
  },
  {
    timestamps:true
    
  },
);

// 2. Definir modelo

const Usermodel = model(
  "users", // Define la coleccion que almacenara el objeto creado
  UserSchema, // Asocia la estructura
);

export default Usermodel;
