import { Router } from "express"

import {getUsers, patchUsers, createUsers, deleteUsers} from '../controllers/user.controller.js'


const router  = Router()


//Definicion rutas

router.get("/", getUsers)

router.patch('/:userID', patchUsers)

router.post("/", createUsers)

router.delete("/:userID", deleteUsers)



export default router
