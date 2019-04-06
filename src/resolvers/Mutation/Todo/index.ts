import R = require('ramda')
import { CreateTodo } from './CreateTodo'

const mutations = [CreateTodo]

const TodoMutation = R.reduce(R.mergeRight, {})(mutations)

export default TodoMutation
