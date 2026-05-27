// Controller se encarga de manejar las peticiones y las respuestas de los clientes

import AppointmentModel from "../models/appointment.model.js";
import { dbGetAppointment, insertAppointment, dbDeleteAppointment } from "../services/appointment.services.js";

const createAppointment = async ( req, res ) => {

    try {
        const inputData = req.body;

    const data = await insertAppointment(inputData);

    res.json({
        msg: 'Crea una nueva cita',
        data: data
    });

    } catch (error) {
        console.error(error);

        res.json ({
            msg: 'Error: No se pudo crear la cita'
        })
    }
} ;

const getAppointment = async ( req, res ) => {

    try {
        const data = await dbGetAppointment();

    res.json({
        msg: 'Obtener todas las citas',
        data: data
    });

    } catch (error){
        console.error(error);

        res.json({
            msg: 'Error no se pudo obtener la cita'
        })
    }
};

const updateAppointment = ( req, res ) => {
    res.json({
        msg: 'Actualiza la cita'
    });
} ;

const deletAppointment = async ( req, res ) => {
    try {
        const id = req.params.id;

    const data = await dbDeleteAppointment(id)

    res.json({
        msg: 'Se elimino la cita',
        data: data
    });
    } catch (error) {
        console.error(error);
        res.json({
            msg: 'Error: No se pudo eliminar la cita'
        });
    }
} ;


export {
    createAppointment,
    getAppointment,
    updateAppointment,
    deletAppointment,
};