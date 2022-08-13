import { getCustomRepository } from 'typeorm'

import { PatientRepository } from '../repositories/PatientRepository'
import { PhysiosRepository } from '../repositories/PhysiosRepository'

interface IPatient {
  name: string
  physios_id: string
  genre: string
  height: number
  weight: number
  birth_date: Date
  diagnosis: string
}

class CreatePatientService {
  async execute({
    name,
    physios_id,
    genre,
    height,
    weight,
    birth_date,
    diagnosis,
  }: IPatient) {
    const patientRepository = getCustomRepository(PatientRepository)
    const physiosRepository = getCustomRepository(PhysiosRepository)
    const physiosUserExists = physiosRepository.findOne(physios_id)
    if (!physiosUserExists) {
      throw new Error('Incorrect User Receiver')
    }
    const patient = patientRepository.create({
      name,
      genre,
      physios_id,
      height,
      weight,
      birth_date,
      diagnosis
    })
    await patientRepository.save(patient)
    return patient
  }
}

export { CreatePatientService }
