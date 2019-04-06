import R = require('ramda')
import { SignUp } from './SignUp'

const mutations = [SignUp]

const UserMutation = R.reduce(R.mergeRight, {})(mutations)

export default UserMutation
