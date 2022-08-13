import { Request, Response } from 'express'
import { CreateSessionService } from '../services/CreateSessionService'

class CreateSessionController {
  async handle(request: Request, response: Response) {
    const { patient_id, type, finished_in } = request.body
    const sessionService = new CreateSessionService()
    const session = await sessionService.execute({
      patient_id,
      type,
      finished_in,
    })
    return response.json(session)
  }
}

export { CreateSessionController }
