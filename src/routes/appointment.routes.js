import {Router} from 'express';

import { createAppointment, deletAppointment, getAppointment, getAppointmentByID, updateAppointmentID } from '../controllers/appointment.controller.js';
import authenticationUser from "../middlewares/authentication.middleware.js";

const router = Router();

//define las rutas para la entidad Appointment
router.get( '/', getAppointment);
router.get('/:id', authenticationUser, getAppointmentByID);
router.post( '/', authenticationUser, createAppointment);
router.patch( '/:id', authenticationUser, updateAppointmentID);
router.delete( '/:id', authenticationUser, deletAppointment);

export default router;