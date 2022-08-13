import { LoadPhysiosService } from '../services/LoadPhysiosService'

import { Request, Response } from 'express'

class LoadPhysiosController {
  async handle(request: Request, response: Response): Promise<Response> {
    const { user_id } = request
    const loadPhysiosService = new LoadPhysiosService()
    const physiosUser = await loadPhysiosService.execute(user_id)
    return response.json(physiosUser)
  }
}
export { LoadPhysiosController }
