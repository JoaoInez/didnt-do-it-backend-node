import { getConnection } from 'typeorm'
import { User } from '../../entity/User'
import { Todo } from '../../entity/Todo'

const Query = {
  users: async (_: any, { where }) => {
    const userRepository = getConnection().getRepository(User)
    return await userRepository.find({
      where: {
        ...where
      },
      relations: ['tasks']
    })
  }
}

export default Query
