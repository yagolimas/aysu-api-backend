import { Request, Response } from 'express'
import { LoadSessionsService } from '../services/LoadSessionsService'

class LoadSessionsController {
  async handle(request: Request, response: Response): Promise<Response> {
    const { patient_id } = request.params
    const sessionService = new LoadSessionsService()
    const sessions = await sessionService.execute(patient_id)
    return response.json(sessions)
  }
}

export { LoadSessionsController }
