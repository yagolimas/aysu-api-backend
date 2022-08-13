import { Router } from 'express'

import authRouter from './authenticate.routes'
import physiosRouter from './physios.routes'
import patientRouter from './patient.routes'
import sessionRouter from './session.routes'

const router = Router()

router.use('/physios', physiosRouter)
router.use('/patient', patientRouter)
router.use('/login', authRouter)
router.use('/session', sessionRouter)

export { router }
