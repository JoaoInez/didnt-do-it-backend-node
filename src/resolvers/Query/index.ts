import { getConnection } from 'typeorm'
import { User } from '../../entity/User'
import { Todo } from '../../entity/Todo'

const Query = {
  users: async (_: any, { where }) => {
    const userRepository = getConnection().getRepository(User)
    return await userRepository.find({
      where: {
        ...where
      }
    })
  },
  todos: async () => {
    const todoRepository = getConnection().getRepository(Todo)
    return await todoRepository.find()
  }
}

export default Query
