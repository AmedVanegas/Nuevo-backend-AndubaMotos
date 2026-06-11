import { Router } from "express";
import {
  createOrder,
  deleteAllOrdersByUserId,
  deleteOrder,
  getOrderByID,
  getOrders,
  getOrdersByUserId,
  updateOrder,
} from "../controllers/order.controller.js";
import authenticationUser from "../middlewares/authentication.middleware.js";

const router = Router();

router.get("/", getOrders);
router.post("/",authenticationUser, createOrder);

router.get("/user/:userID", getOrdersByUserId);
router.delete("/user/:userID",authenticationUser, deleteAllOrdersByUserId);

router.delete("/:orderID",authenticationUser, deleteOrder);
router.patch("/:orderID",authenticationUser, updateOrder);
router.get('/:orderID', getOrderByID)

export default router;
