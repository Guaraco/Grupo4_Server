import { Router } from 'express'
import { UserController } from '../controllers/UserController'

const router: Router = Router()

router.post('/', UserController.buyProduct)

export default router
