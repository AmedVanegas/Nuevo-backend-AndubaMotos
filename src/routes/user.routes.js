const {Router} = require("express")
const {getUsers, patchUsers, postUsers, deleteUsers, createUsers} = require("../controllers/user.controller.js")


const router  = Router()


//Definicion rutas

router.get("/", getUsers)

router.patch('/', patchUsers)

router.post("/", createUsers)

router.delete("/", deleteUsers)










module.exports = router
