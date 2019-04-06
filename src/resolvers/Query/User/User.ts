import { getConnection } from 'typeorm'
import { User } from '../../../entity/User'

const GetUser = {
  user: async (_: any, { where }) => {
    const userRepository = getConnection().getRepository(User)
    return await userRepository.findOne({
      where: {
        ...where
      },
      relations: ['tasks']
    })
  }
}

export { GetUser }
