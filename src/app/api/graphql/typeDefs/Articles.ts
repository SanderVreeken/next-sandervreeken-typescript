import { gql } from 'graphql-tag'

const Article = gql`
    type Article {
        _id: ID!
        description: String!
        href: String!
        imageHref: String!
        title: String!
    }

    input ArticleInput {
        description: String!
        href: String!
        imageHref: String!
        title: String!
    }

    type ArticleResponse {
        code: Int!
        success: Boolean!
        message: String!
        article: Article
    }

    type Mutation {
        createArticle(article: ArticleInput!): ArticleResponse!
    }

    type Query {
        readArticles: [Article!]
    }
`

export default Article
