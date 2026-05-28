import { Router } from "express"

import {getUsers, patchUsers, createUsers, deleteUsers, getUsersbyId} from '../controllers/user.controller.js'


const router  = Router()


//Definicion rutas

router.get("/", getUsers)

router.patch('/:userID', patchUsers)

router.get("/:userID",getUsersbyId)

router.post("/", createUsers)

router.delete("/:userID", deleteUsers)



export default router
