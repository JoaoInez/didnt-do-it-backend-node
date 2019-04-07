import { getConnection } from 'typeorm'
import bcrypt = require('bcrypt')
import { User } from '../../../entity/User'

const LogIn = {
  logIn: async (_: any, { data: { email, password } }, ctx: any) => {
    const userRepository = getConnection().getRepository(User)

    const user = await userRepository.findOne({
      where: {
        email
      },
      relations: ['tasks']
    })

    if (!user) {
      return {
        message: 'BAD_CREDENTIALS'
      }
    }

    const validPassword = await bcrypt.compare(password, user.password)

    if (!validPassword) {
      return { error: 'INVALID_CREDENTIALS' }
    }

    // TODO user auth

    return user
  }
}

export { LogIn }
