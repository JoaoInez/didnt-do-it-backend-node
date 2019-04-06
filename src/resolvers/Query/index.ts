import UserQuery from './User'
import R = require('ramda')

const queries = [UserQuery]

const Query = R.reduce(R.mergeRight, {})(queries)

export default Query
