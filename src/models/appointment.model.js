import { model, Schema } from "mongoose";

// Model crea la estructura de los datos que se van a guardar en la base de datos, en este caso, la colección de citas (appointments

const AppointmentSchema = new Schema({
    client: {
        type: String,
        required: true,
        minlength: 3,    // Regla
        trim: true,      // Modificador  
        unique: true
    },
    date: String,
    service:{
        type: String,
        minlength: 7,
        required: true,
        trim: true
    },
        status: {
        type: String,
        enum: ['confirmada', 'aplazada', 'cancelada'],
        default: 'confirmada'
    }
},{
    versionKey: false,
    timestamps: true  // createdAt - updatedAt
});

// El modelo: Asociacion entre la estructura de datos y la coleccion donde voy a guardar los datos

const AppointmentModel = model(
    'appointment',     // Define el nombre de la coleccion donde voy a guardar los dcoumentos 
    AppointmentSchema
);


export default AppointmentModel;