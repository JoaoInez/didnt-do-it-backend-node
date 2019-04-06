import Query from './Query'
import Mutation from './Mutation'
import Union from './Union'

const resolvers = {
  Query,
  Mutation,
  ...Union
}

export default resolvers
