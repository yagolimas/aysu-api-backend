import { CreatePhysiosController } from '../controllers/CreatePhysiosController'
import { LoadPhysiosController } from '../controllers/LoadPhysiosController'
import { authentication } from '../middlewares/authentication'

import { Router } from 'express'

const physiosRouter = Router()

const createPhysiosController = new CreatePhysiosController()
const loadPhysiosController = new LoadPhysiosController()

physiosRouter.post('/', createPhysiosController.handle)
physiosRouter.get('/', authentication, loadPhysiosController.handle)

export default physiosRouter