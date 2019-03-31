import 'reflect-metadata'
const express = require('express')
const { ApolloServer, gql } = require('apollo-server-express')

const app = express()
const port = 4000

const typeDefs = gql`
  type Query {
    "A simple type for getting started!"
    hello: String
  }
`

const resolvers = {
  Query: {
    hello: () => 'hello world'
  }
}

const server = new ApolloServer({
  typeDefs,
  resolvers
})

server.applyMiddleware({ app })

app.get('/hello-world', (req, res) => res.send('Hello World!'))

app.listen({ port }, () =>
  console.log(`🚀 Server ready at http://localhost:4000${server.graphqlPath}`)
)
