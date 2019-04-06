import R = require('ramda')
import { GetUser as User } from './User'

const queries = [User]

const UserQuery = R.reduce(R.mergeRight, {})(queries)

export default UserQuery
