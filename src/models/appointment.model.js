import { model, Schema } from "mongoose";

// Model crea la estructura de los datos que se van a guardar en la base de datos, en este caso, la colección de citas (appointments

const AppointmentSchema = new Schema(
    {
        client: {
            type: String,
            required: [true, 'El nombre del cliente es obligatorio'],
            minlength: [3, 'El nombre debe tener al menos 3 caracteres'],
            trim: true
        },
        date: {
            type: Date,
            required: [true, 'La fecha de la cita es obligatoria']
        },
        service: {
            type: String,
            required: [true, 'El servicio es obligatorio'],
            minlength: [7, 'El servicio debe tener al menos 7 caracteres'],
            trim: true,
            enum: [
                'Cambio de aceite y filtro',
                'Revisión de frenos',
                'Cambio de llantas',
                'Revisión del motor completa',
                'Sincronización del carburador',
                'Cambio de cadena y piñones',
                'Revisión del sistema eléctrico',
                'Afinación general de moto'
            ]
        },
        status: {
            type: String,
            enum: ['confirmada', 'aplazada', 'cancelada'],
            default: 'confirmada'
        },
        brand: {
            type: String,
            required: [true, 'La marca es obligatoria'],
            trim: true
        },
        model: {
            type: String,
            required: [true, 'El modelo es obligatorio'],
            trim: true
        },
        year: {
            type: Number,
            required: [true, 'El año es obligatorio'],
            min: [1990, 'Año no válido'],
            max: [2026, 'Año no válido']
        },
        plate: {
            type: String,
            required: [true, 'La placa es obligatoria'],
            trim: true,
            uppercase: true,
            unique: true
        },  
    },
    {
        versionKey: false,
        timestamps: true  // createdAt - updatedAt
    });

// El modelo: Asociacion entre la estructura de datos y la coleccion donde voy a guardar los datos

const AppointmentModel = model(
    'appointment',     // Define el nombre de la coleccion donde voy a guardar los dcoumentos 
    AppointmentSchema
);


export default AppointmentModel;