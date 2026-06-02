
import { Router } from "express"


import{createdShoppingcar,getShoppingcar,patchShoppingcar,deleteShoppingcar,getShoppingcarByid} from '../controllers/shoppingcar.controller.js'


const router  = Router()

//Definicion rutas


router.post("/", createdShoppingcar)

router.get("/", getShoppingcar)

router.patch("/:idshoppingcar", patchShoppingcar)

router.delete("/:idshoppingcar", deleteShoppingcar)

router.get("/:idshoppingcar", getShoppingcarByid)



export default router