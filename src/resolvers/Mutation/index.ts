import { getConnection } from 'typeorm'
import bcrypt = require('bcrypt')
import { User } from '../../entity/User'

const Mutation = {
  Mutation: {
    signUp: async (
      _: any,
      {
        username,
        email,
        password
      }: { username: string; email: string; password: string }
    ) => {
      const hashedPassword = await bcrypt.hash(password, 10)
      const user = new User()
      user.username = username
      user.email = email
      user.password = hashedPassword

      const userRepository = getConnection().getRepository(User)

      await userRepository.save(user)

      return user
    }
  }
}

export default Mutation
