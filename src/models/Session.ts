import {
  Entity,
  PrimaryColumn,
  Column,
  CreateDateColumn,
  ManyToOne,
  JoinColumn,
} from 'typeorm'

import { v4 as uuid } from 'uuid'

import Patient from './Patient'

@Entity('session')
export default class Session {
  @PrimaryColumn()
  id: string

  @JoinColumn({ name: 'patient_id' })
  @ManyToOne(() => Patient)
  patient: Patient

  @Column()
  patient_id: string

  @Column()
  type: string

  @CreateDateColumn()
  created_at: Date

  @Column()
  finished_in: Date

  constructor() {
    this.id = this.id || uuid()
  }
}
