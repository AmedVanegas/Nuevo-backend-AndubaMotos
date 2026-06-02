import {Router} from 'express';

import { createAppointment, deletAppointment, getAppointment, getAppointmentByID, updateAppointmentID } from '../controllers/appointment.controller.js';

const router = Router();

//define las rutas para la entidad Appointment
router.get( '/', getAppointment);
router.get('/:id', getAppointmentByID);
router.post( '/', createAppointment);
router.patch( '/:id', updateAppointmentID);
router.delete( '/:id', deletAppointment);

export default router;