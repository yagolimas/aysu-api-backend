import {
  Entity,
  PrimaryColumn,
  Column,
  UpdateDateColumn,
  CreateDateColumn,
  ManyToOne,
  JoinColumn,
} from 'typeorm'

import { v4 as uuid } from 'uuid'

import Physios from './Physios'

@Entity('patients')
export default class Patient {
  @PrimaryColumn()
  id: string

  @Column()
  physios_id: string

  @JoinColumn({ name: 'physios_id' })
  @ManyToOne(() => Physios)
  physios: Physios

  @Column()
  name: string

  @Column()
  genre: string

  @Column()
  height: number

  @Column()
  weight: number

  @Column()
  diagnosis: string

  @Column()
  birth_date: Date

  @Column()
  status: number

  @UpdateDateColumn()
  updated_at: Date

  @CreateDateColumn()
  created_at: Date

  constructor() {
    this.id = this.id || uuid()
  }
}
