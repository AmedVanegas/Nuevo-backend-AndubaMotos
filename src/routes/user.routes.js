import { Router } from "express"

import {getUsers, patchUsers, createUsers, deleteUsers} from '../controllers/user.controller.js'


const router  = Router()


//Definicion rutas

router.get("/", getUsers)

router.patch('/', patchUsers)

router.post("/", createUsers)

router.delete("/", deleteUsers)



export default router
