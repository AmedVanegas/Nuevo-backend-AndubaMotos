// Controller se encarga de manejar las peticiones y las respuestas de los clientes

import mongoose from "mongoose";
import AppointmentModel from "../models/appointment.model.js";
import { dbGetAppointment, insertAppointment, dbDeleteAppointment, dbGetAppointmentByID } from "../services/appointment.services.js";

const createAppointment = async (req, res) => {

    try {
        const inputData = req.body;

        const data = await insertAppointment(inputData);

        res.json({
            msg: 'Crea una nueva cita',
            data: data
        });

    } catch (error) {
        console.error(error);

        if(error.code === 11000){
            return res.json({
                msg: 'Error de validación por cliente duplicado'
            })
        } 

        res.status(500).json({
            msg: 'Error: No se pudo crear la cita'
        })
    }
};

const getAppointment = async (req, res) => {

    try {
        const data = await dbGetAppointment();

        res.json({
            msg: 'Obtener todas las citas',
            data: data
        });

    } catch (error) {
        console.error(error);
        res.status(500).json({
            msg: 'Error no se pudo obtener la cita'
        });
    }
};

const getAppointmentByID = async (req, res) => {
    try {
        const id = req.params.id;

        // Defensiva: condicionamos previo a que ocurra el error

        if (!mongoose.Types.ObjectId.isValid(id)) {
            return res.status(400).json({
                msg: 'No se encontro el ID'
            });
        }

        const data = await dbGetAppointmentByID(id)
        res.json({
            msg: 'Se obtuvo la cita por ID',
            data: data
        });

    } catch (error) {
        console.error(error)

        res.status(500).json({
            msg: 'No se pudo obtener la cita por ID'
        });
    }
}

const updateAppointment = async (req, res) => {

    try {
        const id = req.params.id;  //id de lo que quiero actualizar
        const inputData = req.body;  // obtiene los paramteros que quiero actualizar

        const data = await AppointmentModel.findByIdAndUpdate(id, inputData, { returnDocument: 'after' });

        if (!data) {
            throw new Error( 'No se puede actualizar un producto inexistente' );
        }

        res.json({
            msg: 'Se actualizo la cita',
            data: data
        });
    } catch (error) {
        console.error(error)

        if (error.name === 'CastError') {
            return res.status(400).json({
                msg: 'No se encontro el ID'
            });
        };

        if(error.message.includes('No se puede actualizar un producto inexistente' )){
            return res.status(400).json({
                msg: error.message
            });
        };

        res.status(500).json({
            msg: 'No se pudo actualizar la cita'
        });
    }
};

const deletAppointment = async (req, res) => {
    try {
        const id = req.params.id;

        if (!mongoose.Types.ObjectId.isValid(id)) {
            return res.status(400).json({
                msg: 'No se encontro el ID'
            });
        }

        const data = await dbDeleteAppointment(id);

        if (!data) {
            return res.json({
                msg: 'No se puede eliminar un producto inexistente'
            });
        }

        res.json({
            msg: 'Se elimino la cita',
            data: data
        });
    } catch (error) {
        console.error(error);
        res.status(500).json({
            msg: 'Error: No se pudo eliminar la cita'
        });
    }
};

export {
    createAppointment,
    getAppointment,
    updateAppointment,
    deletAppointment,
    getAppointmentByID
};