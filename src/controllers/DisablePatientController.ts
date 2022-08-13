import { Request, Response } from 'express'
import { DisablePatientService } from '../services/DisablePatientService'

class DisablePatientController {
  async handle(request: Request, response: Response): Promise<Response> {
    const { patient_id } = request.body
    const patientService = new DisablePatientService()
    await patientService.execute(patient_id)
    return response.json({ ok: true })
  }
}
export { DisablePatientController }
