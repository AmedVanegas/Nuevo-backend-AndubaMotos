import { Router } from "express"

import {getServices, patchServices, createServices, deleteServices} from '../controllers/services.controller.js'


const router  = Router()


//Definicion rutas

router.get("/", getServices)

router.patch("/", patchServices)

router.post("/", createServices)

router.delete("/", deleteServices)



export default router