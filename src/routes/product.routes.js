import {Router} from 'express';

const router = Router();

import { deleteProducts, getProducts, pacthProducts, postProducts } from '../controllers/product.controllers.js';



// definir rutas para productos
router.get ('/', getProducts);
router.patch('/', pacthProducts);
router.post('/',postProducts);
router.delete('/', deleteProducts);


export default router