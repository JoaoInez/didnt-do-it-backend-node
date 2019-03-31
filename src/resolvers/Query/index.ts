import { getConnection } from 'typeorm'
import { User } from '../../entity/User'

const Query = {
  users: async (_: any, { where }) => {
    const userRepository = getConnection().getRepository(User)
    return await userRepository.find({
      where: {
        ...where
      }
    })
  }
}

export default Query
