import { Router } from "express"

import {getCategory, patchCategory, createCategory, deleteCategory, getCategoryByid, } from '../controllers/category.controller.js'


const router  = Router()


//Definicion rutas

router.get("/", getCategory)

router.post("/", createCategory)

router.delete("/:id",  deleteCategory)

router.get("/:id", getCategoryByid)

router.patch("/:id", patchCategory)



export default router