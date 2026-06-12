import { Router } from "express"

import {getCategory, patchCategory, createCategory, deleteCategory, getCategoryByid, } from '../controllers/category.controller.js'
import authenticationUser from "../middlewares/authentication.middleware.js";

const router  = Router()


//Definicion rutas

router.get("/", getCategory)

router.post("/", authenticationUser, createCategory)

router.delete("/:id", authenticationUser, deleteCategory)

router.get("/:id", authenticationUser, getCategoryByid)

router.patch("/:id", authenticationUser, patchCategory)



export default router