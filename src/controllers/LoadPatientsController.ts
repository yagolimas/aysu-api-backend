import { Request, Response } from 'express'
import { LoadPatientsService } from '../services/LoadPatientsService'

class LoadPatientsController {
  async handle(request: Request, response: Response): Promise<Response> {
    const { user_id } = request
    const { page = 1 } = request.query
    const patientService = new LoadPatientsService()
    const { patients, count } = await patientService.execute(user_id, page)
    const patientsMap = patients.map((patient) => ({
      id: patient.id,
      name: patient.name,
      last_update: patient.updated_at,
    }))
    response.header('X-Total-Count', count)
    return response.json(patientsMap)
  }
}
export { LoadPatientsController }
