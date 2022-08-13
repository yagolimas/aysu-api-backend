import { getCustomRepository } from 'typeorm'
import { PatientRepository } from '../repositories/PatientRepository'

class LoadPatientDetailsService {
  async execute(patient_id: string) {
    const patientRepository = getCustomRepository(PatientRepository)
    const patient = await patientRepository.findActivePatientById(patient_id)
    if (!patient) {
      throw new Error('The patient not found')
    }
    return patient
  }
}
export { LoadPatientDetailsService }
