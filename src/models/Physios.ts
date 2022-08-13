import {
  Entity,
  PrimaryColumn,
  Column,
  UpdateDateColumn,
  CreateDateColumn,
} from 'typeorm'
import { Exclude } from 'class-transformer'

import { v4 as uuid } from 'uuid'

@Entity('physios')
export default class Physios {
  @PrimaryColumn()
  readonly id: string

  @Column()
  username: string

  @Column()
  email: string

  @Exclude()
  @Column()
  password: string

  @Column()
  record: string

  @Column()
  clinic: string

  @UpdateDateColumn()
  updated_at: Date

  @CreateDateColumn()
  created_at: Date

  constructor() {
    this.id = this.id || uuid()
  }
}
