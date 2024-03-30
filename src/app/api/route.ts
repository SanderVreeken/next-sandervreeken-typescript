import { ApolloServer } from '@apollo/server'
import { startServerAndCreateNextHandler } from '@as-integrations/next'
import mongoose from 'mongoose'
import { NextRequest } from 'next/server'
import Service from './graphql/typeDefs/Service'
import { merge } from 'lodash'
import articleResolvers from './graphql/resolvers/Article'
import serviceResolvers from './graphql/resolvers/Service'
import Article from './graphql/typeDefs/Articles'

const databaseURI = `mongodb+srv://${process.env.DB_USER}:${process.env.DB_PASS}@${process.env.DB_HOST}`
mongoose.connect(databaseURI)

const server = new ApolloServer({
  typeDefs: [Article, Service],
  resolvers: merge(articleResolvers, serviceResolvers),
})

// Typescript: req has the type NextRequest
const handler = startServerAndCreateNextHandler<NextRequest>(server, {
  context: async req => ({ req }),
})

export { handler as GET, handler as POST } 