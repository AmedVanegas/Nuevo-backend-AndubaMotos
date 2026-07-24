import { Schema, model } from "mongoose";
import { ALLOWED_ROLES, ROLES } from "../config/global.config.js";

// 1. Definir esquema

const UserSchema = new Schema(
  {
    username: {
      type: String,
      required: [true, 'El nombre es obligatorio'],
      trim: true,
      unique:true
    },
    document: {
      type: String,
      required: true,
      maxlength: 16,
      unique:true
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
      unique:true
    },
    password: {
      type: String,
      required: true,
      minLength: 8
    },
    rol: {
      type: String,
      enum: ALLOWED_ROLES,
      default: ROLES.CLIENT,
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
        default:'active'
    },
 createdBy:{
      type:Schema.Types.ObjectId,
      ref:'users',
      required:true
    },
   
  },
  {
    versionKey:false,
    timestamps:true
    
    
  },
);

// 2. Definir modelo

const Usermodel = model(
  "users", // Define la coleccion que almacenara el objeto creado
  UserSchema, // Asocia la estructura
);

export default Usermodel;
