import { Router } from "express";

import {
  getMc,
  patchMc,
  createMc,
  deleteMc,
  getMcById,
} from "../controllers/motorcycle.controller.js";
import authenticationUser from "../middlewares/authentication.middleware.js";
import { ROLES } from "../config/global.config.js";
import { authorizationUser } from "../middlewares/authorization.middleware.js";

const router = Router();

const STAFF = [ROLES.OWNER, ROLES.ADMIN, ROLES.EMPLOYEE]

router.get("/", getMc);

router.patch("/:motorcycleId", authenticationUser,authorizationUser(STAFF), patchMc);

router.get("/:motorcycleId", authenticationUser, getMcById);

router.post("/", authenticationUser,authorizationUser(STAFF), createMc);

router.delete("/:motorcycleId", authenticationUser,authorizationUser(STAFF), deleteMc);

export default router;
