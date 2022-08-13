import { getCustomRepository } from 'typeorm'
import { SessionRepository } from '../repositories/SessionRepository'

class LoadSessionsService {
  async execute(patient_id: string) {
    const sessionRepository = getCustomRepository(SessionRepository)
    const sessions = await sessionRepository.find({
      where: {
        patient_id: patient_id,
      }
    })
    return sessions
  }
}

export { LoadSessionsService }
