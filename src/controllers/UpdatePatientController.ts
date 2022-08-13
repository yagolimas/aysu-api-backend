import { Request, Response } from 'express'

import { UpdatePatientService } from '../services/UpdatePatientService'

interface IPatient {
  patient_id: string;
  name?: string;
  birth_date?: Date;
  weight?: number
  height?: number
  genre?: string
}

class UpdatePatientController {
  async handle(request: Request, response: Response): Promise<Response> {
    const patient: IPatient = request.body
    const patientService = new UpdatePatientService()
    await patientService.execute(patient)
    return response.json({ ok: true })
  }
}
export { UpdatePatientController }
