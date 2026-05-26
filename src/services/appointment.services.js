import AppointmentModel from "../models/appointment.model.js"

const insertAppointment = async ( newAppointment ) => {
    return await AppointmentModel.create( newAppointment );
}

export {
    insertAppointment
}