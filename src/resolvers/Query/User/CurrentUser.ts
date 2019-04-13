import { getConnection } from 'typeorm'
import { User } from '../../../entity/User'

const CurrentUser = {
  currentUser: async (_: any, args: any, ctx: any) => {
    const userRepository = getConnection().getRepository(User)
    const currentUser = ctx.req.currentUser

    if (!currentUser) {
      return null
    }

    return await userRepository.findOne({
      where: {
        id: currentUser
      },
      relations: ['todos']
    })
  }
}

export { CurrentUser }
