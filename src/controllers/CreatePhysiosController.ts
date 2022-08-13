import { Request, Response } from 'express'
import { CreatePhysiosService } from '../services/CreatePhysiosService'

class CreatePhysiosController {
  async handle(request: Request, response: Response): Promise<Response> {
    const { username, email, password, record, clinic } = request.body
    const physiosService = new CreatePhysiosService()
    const physios = await physiosService.execute({
      username,
      email,
      password,
      record,
      clinic,
    })
    return response.json(physios)
  }
}
export { CreatePhysiosController }
