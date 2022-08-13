import { getCustomRepository } from 'typeorm'
import { PatientRepository } from '../repositories/PatientRepository'

class DisablePatientService {
  async execute(patientId: string) {
    const patientRepository = getCustomRepository(PatientRepository)
    const patient = await patientRepository.findActivePatientById(patientId)
    if (!patient) {
      throw Error('The patient not found')
    }
    return await patientRepository.update({ id: patientId }, { status: 0 })
  }
}
export { DisablePatientService }
