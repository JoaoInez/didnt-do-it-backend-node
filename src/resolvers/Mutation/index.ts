import { getConnection } from 'typeorm'
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
      const user = new User()
      user.username = username
      user.email = email
      user.password = password

      const userRepository = getConnection().getRepository(User)

      await userRepository.save(user)

      return user
    }
  }
}

export default Mutation
