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

const router = Router();

router.get("/", getOrders);
router.post("/", createOrder);

router.get("/user/:userID", getOrdersByUserId);
router.delete("/user/:userID", deleteAllOrdersByUserId);

router.delete("/:orderID", deleteOrder);
router.patch("/:orderID", updateOrder);
router.get('/:orderID', getOrderByID)

export default router;
