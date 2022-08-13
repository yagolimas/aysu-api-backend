import { getCustomRepository } from 'typeorm'
import { PhysiosRepository } from '../repositories/PhysiosRepository'
import { hash } from 'bcryptjs'

interface IPhysios {
  username: string
  email: string
  password: string
  record: string
  clinic: string
}

class CreatePhysiosService {
  async execute({ username, email, password, record, clinic }: IPhysios) {
    const physiosRepository = getCustomRepository(PhysiosRepository)
    const passwordHash = await hash(password, 8)
    // TODO - Check if there is already a physios
    const physios = physiosRepository.create({
      username,
      email,
      password: passwordHash,
      record,
      clinic,
    })
    await physiosRepository.save(physios)

    return physios
  }
}
export { CreatePhysiosService }
