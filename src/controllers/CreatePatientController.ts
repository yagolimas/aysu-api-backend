import { Request, Response } from 'express'
import { CreatePatientService } from '../services/CreatePatientService'

class CreatePatientController {
  async handle(request: Request, response: Response): Promise<Response> {
    const { name, genre, height, weight, birth_date, diagnosis } = request.body
    const { user_id } = request
    const patientService = new CreatePatientService()
    const patient = await patientService.execute({
      name,
      physios_id: user_id,
      genre,
      height,
      weight,
      birth_date,
      diagnosis,
    })
    return response.json(patient)
  }
}

export { CreatePatientController }
