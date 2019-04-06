import { getConnection } from 'typeorm'
import { User } from '../../../entity/User'
import { Todo } from '../../../entity/Todo'

const CreateTodo = {
  createTodo: async (_: any, { data: { task, id } }) => {
    const userRepository = getConnection().getRepository(User)
    const todoRepository = getConnection().getRepository(Todo)

    const user = await userRepository.findOne({
      where: {
        id
      }
    })

    if (!user) {
      return {
        message: 'SERVER_ERROR'
      }
    }

    const todo = new Todo()
    todo.task = task
    todo.user = user

    const result = await todoRepository
      .save(todo)
      .then(_todo => _todo)
      .catch(() => ({ message: 'DB_ERROR' }))

    return result
  }
}

export { CreateTodo }
