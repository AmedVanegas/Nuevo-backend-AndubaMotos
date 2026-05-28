import { Router } from "express";

import {
  getMc,
  patchMc,
  createMc,
  deleteMc,
  getMcById,
} from "../controllers/motorcycle.controller.js";

const router = Router();

router.get("/", getMc);

router.patch("/:motorcycleId", patchMc);

router.get("/:motorcycleId", getMcById);

router.post("/", createMc);

router.delete("/:motorcycleId", deleteMc);

export default router;
