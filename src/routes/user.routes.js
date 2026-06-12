import { Router } from "express"

import {getUsers, patchUsers, createUsers, deleteUsers, getUsersbyId} from '../controllers/user.controller.js'
import authenticationUser from "../middlewares/authentication.middleware.js"
import { authorizationUser } from "../middlewares/authorization.middleware.js"
import { ROLES } from "../config/global.config.js"


const router  = Router()


//Definicion rutas

router.get("/", getUsers)

router.patch('/:userID', patchUsers)

router.get("/:userID",getUsersbyId)

router.post("/", authenticationUser,authorizationUser([ROLES.ADMIN,ROLES.OWNER]),createUsers)

router.delete("/:userID", deleteUsers)



export default router
