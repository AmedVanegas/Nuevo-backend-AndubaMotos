import { Schema, model } from "mongoose";

const MotorcycleSchema = new Schema(
  {
    licensePlate: {
      type: String,
      required: [true, 'La placa es obligatoria'],
      uppercase: true,
      trim: true,
      maxlength: 6,
      unique: true,
    },
    brand: {
      type: String,
      required: true,
      trim: true,
    },
    modelName: {
      type: String,
      required: true,
      trim: true,
    },
    cellphone: {
      type: String,
      required: true,
      trim: true,
     
    },
    color: {
      type: String,
      required: true,
      trim: true,
    },
    client: {
      type: String,
      required: true,
    },
    services: 
      {
        type: String,
        required: true,
      }
    ,

    status: {
      type: Boolean,
      default: true,
    },
  },
  {
    versionKey: false,
    timestamps: true,
  },
);

const MotorcycleModel = model("Motorcycles", MotorcycleSchema);

export default MotorcycleModel;
