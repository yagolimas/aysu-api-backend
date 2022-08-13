import { Router } from 'express'
import { AuthenticateUserController } from '../controllers/AuthenticateUserController'

const authRouter = Router()

const authController = new AuthenticateUserController()

authRouter.post('/', authController.handle)

export default authRouter