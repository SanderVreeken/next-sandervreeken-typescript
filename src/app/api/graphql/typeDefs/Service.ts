import { gql } from 'graphql-tag'

const Service = gql`
    type Service {
        _id: ID!
        calendlyHref: String!
        description: String!
        euros: Int!
        minutes: Int!
        title: String!
        topics: [String!]!
    }

    input ServiceInput {
        calendlyHref: String!
        description: String!
        euros: Int!
        minutes: Int!
        title: String!
        topics: [String!]!
    }

    type ServiceReponse {
        code: Int!
        success: Boolean!
        message: String!
        service: Service
    }

    type Mutation {
        createService(service: ServiceInput!): ServiceReponse!
    }

    type Query {
        readService(id: ID!): Service!
        readServices: [Service!]
    }
`

export default Service
