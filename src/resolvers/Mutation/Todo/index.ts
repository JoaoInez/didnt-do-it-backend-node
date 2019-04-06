import R = require('ramda')
import { CreateTodo } from './CreateTodo'
import { UpdateTodo } from './UpdateTodo'

const mutations = [CreateTodo, UpdateTodo]

const TodoMutation = R.reduce(R.mergeRight, {})(mutations)

export default TodoMutation
