import R = require('ramda')
import { SignUp } from './SignUp'
import { LogIn } from './LogIn'
import { SignOut } from './SignOut'

const mutations = [SignUp, LogIn, SignOut]

const UserMutation = R.reduce(R.mergeRight, {})(mutations)

export default UserMutation
