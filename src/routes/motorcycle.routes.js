import { Router } from "express";

import {
  getMc,
  patchMc,
  createMc,
  deleteMc,
  getMcById,
} from "../controllers/motorcycle.controller.js";
import authenticationUser from "../middlewares/authentication.middleware.js";

const router = Router();

router.get("/", getMc);

router.patch("/:motorcycleId", authenticationUser, patchMc);

router.get("/:motorcycleId", authenticationUser, getMcById);

router.post("/", authenticationUser, createMc);

router.delete("/:motorcycleId", authenticationUser, deleteMc);

export default router;
