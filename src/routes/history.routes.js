import { Router } from "express";
import {
  createHistory,
  deleteHistory,
  getHistories,
  getHistorybyUserId,
  updateHistory,
} from "../controllers/history.controller.js";
import authenticationUser from "../middlewares/authentication.middleware.js";

const router = Router();

router.get("/", authenticationUser,getHistories);

router.get("/:userID",getHistorybyUserId);

router.post("/", authenticationUser ,createHistory);

router.patch("/:userID",authenticationUser ,updateHistory);

router.delete("/:userID",authenticationUser, deleteHistory);

export default router;
