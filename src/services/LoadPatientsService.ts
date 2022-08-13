import { getCustomRepository } from 'typeorm'

import { PatientRepository } from '../repositories/PatientRepository'

class LoadPatientsService {
  async execute(physios_id: string, page: number) {
    const patientRepository = getCustomRepository(PatientRepository)
    const [patients, count] =
      await patientRepository.findActivePatientsByPhysios(physios_id, page)
    if (Array.isArray(patients) && !patients.length) {
      throw new Error('No patient found')
    }
    return { patients, count }
  }
}
export { LoadPatientsService }
