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
import { isOwnerOrStaff } from "../middlewares/ownership.middleware.js"


const router = Router();

router.get("/", getOrders);
router.post("/", authenticationUser, createOrder);

router.get("/user/:userID", authenticationUser, isOwnerOrStaff(async (req) => req.params.userID), getOrdersByUserId);
router.delete(
  "/:orderID",
  authenticationUser,
  isOwnerOrStaff(async (req) => {
    const order = await OrderModel.findById(req.params.orderID).select("user");
    return order?.user;
  }),
  deleteOrder,
);

router.patch(
  "/:orderID",
  authenticationUser,
  isOwnerOrStaff(async (req) => {
    const order = await OrderModel.findById(req.params.orderID).select("user");
    return order?.user;
  }),
  updateOrder,
);

router.delete("/:orderID", authenticationUser, deleteOrder);

router.get("/:orderID", getOrderByID);

export default router;
