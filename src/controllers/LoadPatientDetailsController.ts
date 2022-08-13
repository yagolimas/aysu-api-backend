import { Request, Response } from 'express'
import { LoadPatientDetailsService } from '../services/LoadPatientDetailsService'

class LoadPatientDetailsController {
  async handle(request: Request, response: Response): Promise<Response> {
    const { patient_id } = request.body
    const patientService = new LoadPatientDetailsService()
    const patient = await patientService.execute(patient_id)
    return response.json(patient)
  }
}
export { LoadPatientDetailsController }
