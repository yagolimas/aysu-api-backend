import { getCustomRepository } from 'typeorm'
import { compare } from 'bcryptjs'
import { sign } from 'jsonwebtoken'
import { PhysiosRepository } from '../repositories/PhysiosRepository'

interface IAuthenticateRequest {
  email: string
  password: string
}

class AuthenticateUserService {
  async execute({ email, password }: IAuthenticateRequest) {
    const userPhysiosRepository = getCustomRepository(PhysiosRepository)
    const userPhysios = await userPhysiosRepository.findOne({ email })
    if (!userPhysios) {
      throw new Error('Email/Password incorrect')
    }
    const passwordMatch = await compare(password, userPhysios.password)
    if (!passwordMatch) {
      throw new Error('Password incorrect')
    }
    const token = sign({ email: userPhysios.email }, process.env.JWT_SECRET, {
      subject: userPhysios.id,
      expiresIn: '1d',
    })
    return token
  }
}

export { AuthenticateUserService }
