import AppointmentModel from "../models/appointment.model.js";
import ServiceRecordModel from "../models/ServiceRecord.model.js";


const dbGetServiceRecords = async () => {
  return await ServiceRecordModel.find();
};

const dbGetServiceRecordsByUserID = async (userID) => {
  
  const userAppointments = await AppointmentModel.find({ client: userID }).select('_id');

  if (userAppointments.length === 0) {
    throw new Error("No hay citas registradas para este usuario");
  }

  const appointmentIDs = userAppointments.map((app) => app._id);

  return await ServiceRecordModel.find({ appointment: { $in: appointmentIDs } })
    .populate({
      
      path: 'appointment',
      populate: { path: 'client', select: 'username phoneNumber' } 
    })
    .populate("mechanic", "username");
};

const dbGetServiceRecordById = async (id) => {
  return await ServiceRecordModel.findById(id);
};


const dbGetServiceRecordsByMechanic = async (mechanicID) => {
  return await ServiceRecordModel.find({ mechanic: mechanicID });
};


const dbGetServiceRecordByAppointment = async (appointmentID) => {
 
  return await ServiceRecordModel.findOne({ appointment: appointmentID });
};


const dbCreateServiceRecord = async (data) => {
  return await ServiceRecordModel.create(data);
};


const dbUpdateServiceRecord = async (id, updateData) => {
  return await ServiceRecordModel.findByIdAndUpdate(id, updateData, { returnDocument: 'after'});
};


const dbDeleteServiceRecord = async (id) => {
  return await ServiceRecordModel.findByIdAndDelete(id);
};

export {
  dbGetServiceRecords,
  dbGetServiceRecordById,
  dbGetServiceRecordsByMechanic,
  dbGetServiceRecordByAppointment,
  dbCreateServiceRecord,
  dbUpdateServiceRecord,
  dbDeleteServiceRecord,
  dbGetServiceRecordsByUserID
};