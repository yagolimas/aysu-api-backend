import { getCustomRepository } from 'typeorm'

import { SessionRepository } from '../repositories/SessionRepository'

interface ISession {
  patient_id: string
  type: string
  finished_in: Date
}

class CreateSessionService {
  async execute({ patient_id, type, finished_in }: ISession) {
    const sessionRepository = getCustomRepository(SessionRepository)
    // TODO - Check if there is already a patient
    const session = sessionRepository.create({
      patient_id,
      type,
      finished_in,
    })
    await sessionRepository.save(session)
    return session
  }
}

export { CreateSessionService }
