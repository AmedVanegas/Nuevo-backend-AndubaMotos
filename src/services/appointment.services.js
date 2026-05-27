import AppointmentModel from "../models/appointment.model.js"

const insertAppointment = async ( newAppointment ) => {
    return await AppointmentModel.create( newAppointment );
}

const dbGetAppointment = async ( ) => {
    return await AppointmentModel.find();
}

export {
    insertAppointment,
    dbGetAppointment
}