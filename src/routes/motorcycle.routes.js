import {Router} from 'express'

import { getMc, patchMc, createMc, deleteMc } from '../controllers/motorcycle.controller.js'


const router = Router()



router.get('/', getMc)

router.patch('/', patchMc)

router.post('/', createMc)

router.delete('/', deleteMc)

export default router