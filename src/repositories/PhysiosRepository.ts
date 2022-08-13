import { EntityRepository, Repository } from 'typeorm'

import Physios from '../models/Physios'

@EntityRepository(Physios)
class PhysiosRepository extends Repository<Physios> {}

export { PhysiosRepository }