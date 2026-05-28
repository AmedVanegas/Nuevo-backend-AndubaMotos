import { Router } from "express";

const router = Router();

import {
  createProduct,
  deleteProducts,
  getProductById,
  getProducts,
  pacthProducts,
} from "../controllers/product.controllers.js";

// definir rutas para productos
router.get("/", getProducts);

router.patch("/:productId", pacthProducts);

router.get('/:productId', getProductById)

router.post("/", createProduct);

router.delete("/:productId", deleteProducts);

export default router;
