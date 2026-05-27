import {Router} from 'express';

import { createAppointment, deletAppointment, getAppointment, updateAppointment } from '../controllers/appointment.controller.js';

const router = Router();

//define las rutas para la entidad Appointment
router. get( '/', getAppointment);

router.post( '/', createAppointment);

router.patch( '/', updateAppointment);

router.delete( '/:id', deletAppointment);

export default router;