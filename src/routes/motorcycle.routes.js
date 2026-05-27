import {Router} from 'express'

import { getMc, patchMc, createMc, deleteMc } from '../controllers/motorcycle.controller.js'


const router = Router()



router.get('/', getMc)

router.patch('/:motorcycleId', patchMc)

router.post('/', createMc)

router.delete('/:motorcycleId', deleteMc)

export default router