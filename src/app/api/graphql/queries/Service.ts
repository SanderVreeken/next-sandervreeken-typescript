import IService from '@/interfaces/Service';
import { TypedDocumentNode } from '@apollo/client';

import { gql } from 'graphql-tag'

export const serviceQuery: TypedDocumentNode<
    { readService: IService }, string
> = gql`query ReadService($readServiceId: ID!) {
    readService(id: $readServiceId) {
      _id
      calendlyHref
      description
      euros
      minutes
      title
      topics
    }
  }`

export const servicesQuery: TypedDocumentNode<
    { readServices: IService[] }
> = gql`query ReadServices {
  readServices {
    _id
    calendlyHref
    description
    euros
    minutes
    title
  }
}`

