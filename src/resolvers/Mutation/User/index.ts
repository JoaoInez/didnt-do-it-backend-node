import R = require('ramda')
import { SignUp } from './SignUp'
import { LogIn } from './LogIn'

const mutations = [SignUp, LogIn]

const UserMutation = R.reduce(R.mergeRight, {})(mutations)

export default UserMutation
