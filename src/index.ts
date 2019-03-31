import 'reflect-metadata'
import { createConnection } from 'typeorm'
import express = require('express')
import { ApolloServer, gql } from 'apollo-server-express'
import { importSchema } from 'graphql-import'
import path = require('path')
import Query from './resolvers/Query'
import Mutation from './resolvers/Mutation'
import Union from './resolvers/Union'

const typeDefs = importSchema('src/schema/schema.graphql')

const app = express()
const port = 4000

const server = new ApolloServer({
  typeDefs,
  resolvers: {
    Query,
    Mutation,
    ...Union
  }
})

server.applyMiddleware({ app })

app.get('/', (req, res) => res.sendFile(path.join(__dirname + '/index.html')))

createConnection().then(() => {
  app.listen({ port }, () =>
    console.log(
      `🚀 Server running at http://localhost:4000${server.graphqlPath}`
    )
  )
})
