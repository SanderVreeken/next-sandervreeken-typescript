import IArticle from '@/interfaces/Article';
import { TypedDocumentNode } from '@apollo/client';

import { gql } from 'graphql-tag'

const articlesQuery: TypedDocumentNode<
    { readArticles: IArticle[] }
> = gql`query ReadArticles {
    readArticles {
        _id
        description
        href
        imageHref
        title
    }
}`

export default articlesQuery
