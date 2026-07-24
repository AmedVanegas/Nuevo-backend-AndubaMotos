import { Router } from "express";

import {
  createdShoppingcar,
  getShoppingcar,
  patchShoppingcar,
  deleteShoppingcar,
  getShoppingcarByid,
} from "../controllers/shoppingcar.controller.js";
import authenticationUser from "../middlewares/authentication.middleware.js";
import { isOwnerOrStaff } from "../middlewares/ownership.middleware.js";
import shoppingcarmodel from "../models/shoppingcar.models.js";

const router = Router();

//Definicion rutas

router.post("/", authenticationUser, createdShoppingcar);
router.get("/", authenticationUser, getShoppingcar); 

router.patch(
  "/:idshoppingcar",
  authenticationUser,
  isOwnerOrStaff(async (req) => {
    const cart = await shoppingcarmodel
      .findById(req.params.idshoppingcar)
      .select("user");
    return cart?.user;
  }),
  patchShoppingcar,
);

router.delete(
  "/:idshoppingcar",
  authenticationUser,
  isOwnerOrStaff(async (req) => {
    const cart = await shoppingcarmodel
      .findById(req.params.idshoppingcar)
      .select("user");
    return cart?.user;
  }),
  deleteShoppingcar,
);

router.get(
  "/:idshoppingcar",
  authenticationUser,
  isOwnerOrStaff(async (req) => {
    const cart = await shoppingcarmodel
      .findById(req.params.idshoppingcar)
      .select("user");
    return cart?.user;
  }),
  getShoppingcarByid,
);

export default router;
