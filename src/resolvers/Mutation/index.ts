import R = require('ramda')
import UserMutation from './User'
import TodoMutation from './Todo'

const mutations = [UserMutation, TodoMutation]

const Mutation = R.reduce(R.mergeRight, {})(mutations)

export default Mutation
