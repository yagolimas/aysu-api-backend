import { Router } from 'express'

import { authentication } from '../middlewares/authentication'
import { CreatePatientController } from '../controllers/CreatePatientController'
import { LoadPatientsController } from '../controllers/LoadPatientsController'
import { LoadPatientDetailsController } from '../controllers/LoadPatientDetailsController'
import { UpdatePatientController } from '../controllers/UpdatePatientController'
import { DisablePatientController } from '../controllers/DisablePatientController'

const patientRouter = Router()

const createPatientController = new CreatePatientController()
const loadPatientsController = new LoadPatientsController()
const loadPatientDetailsController = new LoadPatientDetailsController()
const updatePatientController = new UpdatePatientController()
const disablePatientController = new DisablePatientController()

patientRouter.post('/', authentication, createPatientController.handle)
patientRouter.get('/', authentication, loadPatientsController.handle)
patientRouter.put('/', authentication, updatePatientController.handle)
patientRouter.post('/details', authentication, loadPatientDetailsController.handle)
patientRouter.delete('/', authentication, disablePatientController.handle)

export default patientRouter