import R = require('ramda')
import { CurrentUser } from './CurrentUser'

const queries = [CurrentUser]

const UserQuery = R.reduce(R.mergeRight, {})(queries)

export default UserQuery
