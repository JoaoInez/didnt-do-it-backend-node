import { getConnection } from 'typeorm'
import bcrypt = require('bcrypt')
import { User } from '../../../entity/User'

const SignUp = {
  signUp: async (_: any, { data: { username, email, password } }) => {
    const userRepository = getConnection().getRepository(User)

    const usernameInUse = await userRepository.findOne({
      where: {
        username: username
      }
    })

    if (usernameInUse) {
      return {
        message: 'USERNAME_IN_USE'
      }
    }

    const emailInUse = await userRepository.findOne({
      where: { email: email }
    })

    if (emailInUse) {
      return {
        message: 'EMAIL_IN_USE'
      }
    }

    const hashedPassword = await bcrypt.hash(password, 10)
    const user = new User()
    user.username = username
    user.email = email
    user.password = hashedPassword

    const result = await userRepository
      .save(user)
      .then(_user => _user)
      .catch(() => ({
        message: 'DB_ERROR'
      }))

    return result
  }
}

export { SignUp }
