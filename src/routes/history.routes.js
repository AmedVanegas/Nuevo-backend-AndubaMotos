import { Router } from "express";
import {
  createHistory,
  deleteHistory,
  getHistories,
  getHistorybyUserId,
  updateHistory,
} from "../controllers/history.controller.js";

const router = Router();

router.get("/", getHistories);

router.get("/:userID", getHistorybyUserId);

router.post("/", createHistory);

router.patch("/:userID", updateHistory);

router.delete("/:userID", deleteHistory);

export default router;
