import { Router } from "express";
import {
  getServiceRecords,
  getServiceRecordById,
  getServiceRecordsByUserID,
  getServiceRecordsByMechanic,
  getServiceRecordByAppointment,
  createServiceRecord,
  updateServiceRecord,
  deleteServiceRecord,
} from "../controllers/serviceRecord.controller.js";
import authenticationUser from "../middlewares/authentication.middleware.js"
import { authorizationUser } from "../middlewares/authorization.middleware.js"
import { ROLES } from "../config/global.config.js"


const router = Router();


const STAFF = [ROLES.OWNER, ROLES.ADMIN, ROLES.EMPLOYEE]

router.get("/", authenticationUser, authorizationUser(STAFF), getServiceRecords);
router.post("/", authenticationUser, authorizationUser(STAFF), createServiceRecord);

router.get("/user/:userID", authenticationUser, getServiceRecordsByUserID);
router.get("/mechanic/:mechanicID", authenticationUser, authorizationUser(STAFF), getServiceRecordsByMechanic);
router.get("/appointment/:appointmentID", authenticationUser, getServiceRecordByAppointment);

router.get("/:id", authenticationUser, getServiceRecordById);
router.patch("/:id", authenticationUser, authorizationUser(STAFF), updateServiceRecord);
router.delete("/:id", authenticationUser, authorizationUser(STAFF), deleteServiceRecord);               

export default router;