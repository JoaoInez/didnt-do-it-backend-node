import 'reflect-metadata'
import { createConnection } from 'typeorm'
import express = require('express')
import { ApolloServer } from 'apollo-server-express'
import { importSchema } from 'graphql-import'
import jwt = require('jsonwebtoken')
import cookieParser = require('cookie-parser')
import resolvers from './resolvers'
const typeDefs = importSchema('src/schema/schema.graphql')

const port = 4000
const app = express()

const server = new ApolloServer({
  typeDefs,
  resolvers,
  context: ({ res, req }) => ({ res, req })
})

app.use(cookieParser())

app.use((req: any, res: any, next) => {
  const { token } = req.cookies
  if (token) {
    const { currentUser } = jwt.verify(token, 'mysecret123') as any
    req.currentUser = currentUser
  }
  next()
})

server.applyMiddleware({
  app,
  cors: {
    origin: 'http://localhost:3000',
    credentials: true
  }
})

createConnection().then(() => {
  app.listen({ port }, () =>
    console.log(
      `🚀 Server running at http://localhost:4000${server.graphqlPath}`
    )
  )
})
