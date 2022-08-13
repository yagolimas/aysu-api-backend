import { Router } from 'express'
import { CreateSessionController } from '../controllers/CreateSessionController'
import { LoadSessionsController } from '../controllers/LoadSessionsController'
import { authentication } from '../middlewares/authentication'

const sessionRouter = Router()

const createSessionController = new CreateSessionController()
const loadSessionsController = new LoadSessionsController()

sessionRouter.post('/', authentication, createSessionController.handle)
sessionRouter.get('/:patient_id', authentication, loadSessionsController.handle)

export default sessionRouter