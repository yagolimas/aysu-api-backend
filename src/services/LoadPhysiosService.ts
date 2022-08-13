import { getCustomRepository } from 'typeorm'
import { PhysiosRepository } from '../repositories/PhysiosRepository'

class LoadPhysiosService {
  async execute(id) {
    const physiosRepository = getCustomRepository(PhysiosRepository)
    const physios = physiosRepository.findOne(id)
    return physios
  }
}
export { LoadPhysiosService }
