import { Router } from "express";

const router = Router();

import {
  createProduct,
  deleteProducts,
  getProducts,
  pacthProducts,
} from "../controllers/product.controllers.js";

// definir rutas para productos
router.get("/", getProducts);

router.patch("/:productId", pacthProducts);

router.post("/", createProduct);

router.delete("/:productId", deleteProducts);

export default router;
