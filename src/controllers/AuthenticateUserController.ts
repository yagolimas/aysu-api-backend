import { Request, Response } from 'express'

import { AuthenticateUserService } from '../services/AuthenticateUserService'

class AuthenticateUserController {
  async handle(request: Request, response: Response): Promise<Response> {
    const { email, password } = request.body
    const authenticateUserService = new AuthenticateUserService()
    try {
      const token = await authenticateUserService.execute({ email, password })
      return response.json(token)
    } catch (error) {
      return response.status(401).json(error.message)
    }
  }
}
export { AuthenticateUserController }
