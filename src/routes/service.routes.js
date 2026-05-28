import { Router } from "express"

import {getServices, patchServices, createServices, deleteServices, getServicesByid, } from '../controllers/services.controller.js'


const router  = Router()


//Definicion rutas

router.get("/", getServices)

router.patch("/:idservice", patchServices)

router.post("/", createServices)

router.delete("/:idservice", deleteServices)

router.get("/:idservice", getServicesByid)



export default router