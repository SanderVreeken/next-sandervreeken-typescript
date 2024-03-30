import { GraphQLError } from 'graphql'
import IArticle from '@/interfaces/Article'
import ArticleM from '../../models/Article'

interface Props {
    article: IArticle
}

const articleResolvers = {
    Mutation: {
        createArticle: async (_: any, { article }: Props) => {
            try {

                const response = await new ArticleM(article).save()

                return {
                    code: 200,
                    success: true,
                    message: 'Article created successfully!',
                    article: response
                }

            } catch (error: any) {
                return {
                    code: error.extensions.response.status,
                    success: false,
                    message: error.extensions.response.body,
                    group: null
                }
            }
        }
    },
    Query: {
        readArticles: async () => {
            try {

                return await ArticleM.find().lean()

            } catch {

                throw new GraphQLError('Could not fetch articles, please verify.')
            }
        }
    }
}

export default articleResolvers