import { Router } from "express"

import {getUsers, patchUsers, createUsers, deleteUsers, getUsersbyId} from '../controllers/user.controller.js'
import authenticationUser from "../middlewares/authentication.middleware.js"
import { authorizationUser } from "../middlewares/authorization.middleware.js"
import { ROLES } from "../config/global.config.js"

const router = Router()

router.get("/", getUsers)
router.patch('/:userID', 
   // authenticationUser, 
    //authorizationUser, 
    patchUsers)
router.get("/:userID", 
    //authenticationUser, 
    //authorizationUser, 
    getUsersbyId)
router.delete("/:userID",
     //authenticationUser, 
     deleteUsers)
router.post("/", 
   // authenticationUser,
    //authorizationUser([ROLES.ADMIN,ROLES.OWNER]),
    createUsers)

export default router

