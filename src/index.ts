import 'reflect-metadata'
import { createConnection } from 'typeorm'
import express = require('express')
import { ApolloServer, gql } from 'apollo-server-express'
import { importSchema } from 'graphql-import'
import path = require('path')
import * as R from 'ramda'
import Query from './resolvers/Query'
import Mutation from './resolvers/Mutation'

const typeDefs = importSchema('src/schema/schema.graphql')

const app = express()
const port = 4000

const resolvers = R.mergeLeft(Query, Mutation)

const server = new ApolloServer({
  typeDefs,
  resolvers
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
