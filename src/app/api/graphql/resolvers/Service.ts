import { GraphQLError } from 'graphql'
import ServiceM from '../../models/Service'
import IService from '@/interfaces/Service'

interface Props {
    id: string
    service: IService
}

const serviceResolvers = {
    Mutation: {
        createService: async (_: any, { service }: Props) => {
            try {

                const response = await new ServiceM(service).save()

                return {
                    code: 200,
                    success: true,
                    message: 'Service created successfully!',
                    service: response
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
        readService: async (_: any, { id }: Props) => {
            try {

                return await ServiceM.findById(id).lean()

            } catch {

                throw new GraphQLError('Could not fetch services, please verify.')
            }
        },
        readServices: async () => {
            try {

                return await ServiceM.find().lean()

            } catch {

                throw new GraphQLError('Could not fetch services, please verify.')
            }
        }
    }
}

export default serviceResolvers