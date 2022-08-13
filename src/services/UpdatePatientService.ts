import { getCustomRepository } from 'typeorm'

import { PatientRepository } from '../repositories/PatientRepository'

interface IPatient {
  patient_id: string
  name?: string
  birth_date?: Date
  weight?: number
  height?: number
  genre?: string
}

class UpdatePatientService {
  async execute(patient: IPatient) {
    const patientRepository = getCustomRepository(PatientRepository)
    const { patient_id, ...patientData } = patient
    const patientFound = await patientRepository.findActivePatientById(patient_id)
    if (!patientFound) {
      throw new Error('The patient not found')
    }
    return await patientRepository.update({ id: patientFound.id }, patientData)
  }
}
export { UpdatePatientService }
