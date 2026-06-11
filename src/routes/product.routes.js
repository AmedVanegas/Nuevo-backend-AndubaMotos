import { Router } from "express";

const router = Router();

import {
  createProduct,
  deleteProducts,
  getProductById,
  getProducts,
  pacthProducts,
} from "../controllers/product.controllers.js";
import authenticationUser from "../middlewares/authentication.middleware.js";

// definir rutas para productos
router.get("/", getProducts);

router.patch("/:productId",authenticationUser, pacthProducts);

router.get('/:productId', getProductById)

router.post("/", authenticationUser ,createProduct);

router.delete("/:productId",authenticationUser, deleteProducts);

export default router;
