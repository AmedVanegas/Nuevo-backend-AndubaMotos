import AppointmentModel from "../models/appointment.model.js"

const insertAppointment = async ( newAppointment ) => {
    return await AppointmentModel.create( newAppointment );
}

const dbGetAppointment = async ( ) => {
    return await AppointmentModel.find();
}

const dbDeleteAppointment = async (appointmentID) => {
    return await AppointmentModel.findOneAndDelete({_id: appointmentID})
}

const dbUpdateAppointment = async ( id, inputData) => {
    return await AppointmentModel.findByIdAndUpdate(id, inputData, {returnDocument: "after"})
}

export {
    insertAppointment,
    dbGetAppointment,
    dbDeleteAppointment
}