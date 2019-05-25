import { getConnection } from 'typeorm'
import bcrypt = require('bcrypt')
import jwt = require('jsonwebtoken')
import { User } from '../../../entity/User'

const LogIn = {
  logIn: async (_: any, { data: { email, password } }, ctx: any) => {
    const userRepository = getConnection().getRepository(User)

    const user = await userRepository.findOne({
      where: {
        email
      },
      relations: ['todos']
    })

    if (!user) {
      return {
        message: 'BAD_CREDENTIALS'
      }
    }

    const validPassword = await bcrypt.compare(password, user.password)

    if (!validPassword) {
      return { message: 'BAD_CREDENTIALS' }
    }

    const token = jwt.sign({ currentUser: user.id }, 'mysecret123')

    ctx.res.cookie('token', token, {
      maxAge: 1000 * 60 * 60 * 24 * 365
    })

    return user
  }
}

export { LogIn }
