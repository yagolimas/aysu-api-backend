import { EntityRepository, Repository } from 'typeorm'

import Patient from '../models/Patient'

@EntityRepository(Patient)
class PatientRepository extends Repository<Patient> {
  async findActivePatientsByPhysios(physiosId: string, page: number) {
    return await this.findAndCount({
      where: {
        physios_id: physiosId,
        status: 1,
      },
      skip: (page - 1) * 5,
      take: 5,
      order: {
        name: 'ASC',
      },
    })
  }

  async findActivePatientById(patientId: string) {
    return await this.findOne({
      where: {
        id: patientId,
        status: 1,
      },
    })
  }
}

export { PatientRepository }
