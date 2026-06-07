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

const router = Router();

router.get("/", getServiceRecords);                         
router.post("/", createServiceRecord);                      


router.get("/user/:userID", getServiceRecordsByUserID);             
router.get("/mechanic/:mechanicID", getServiceRecordsByMechanic);   
router.get("/appointment/:appointmentID", getServiceRecordByAppointment); 


router.get("/:id", getServiceRecordById);                   
router.patch("/:id", updateServiceRecord);                  
router.delete("/:id", deleteServiceRecord);                 

export default router;