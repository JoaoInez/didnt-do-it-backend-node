import { getConnection } from 'typeorm'
import { Todo } from '../../../entity/Todo'

const UpdateTodo = {
  updateTodo: async (_: any, { data: { id, completed } }) => {
    const todoRepository = getConnection().getRepository(Todo)

    const todo = await todoRepository.findOne({
      where: {
        id
      }
    })

    if (!todo) {
      return {
        message: 'SERVER_ERROR'
      }
    }

    todo.completed = completed

    const result = await todoRepository
      .save(todo)
      .then(_todo => _todo)
      .catch(() => ({ message: 'DB_ERROR' }))

    return result
  }
}

export { UpdateTodo }
