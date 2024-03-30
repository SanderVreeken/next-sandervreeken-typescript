export default interface IService {
    _id: string
    calendlyHref: string
    description: string
    euros: number
    minutes: number
    title: string
    topics: [string]
    createdAt: number
    updatedAt: number
}