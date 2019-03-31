import { getConnection } from 'typeorm'
import { User } from '../../entity/User'

const Query = {
  Query: {
    helloWorld: () => 'Hello World',
    users: async () => {
      const userRepository = getConnection().getRepository(User)
      return await userRepository.find()
    }
  }
}

export default Query
