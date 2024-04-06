export default interface IService {
    _id: { $oid: string }
    calendlyHref: string
    description: string
    euros: number
    minutes: number
    title: string
    topics: [string]
    createdAt: { $date: { $numberLong: string } }
    updatedAt: { $date: { $numberLong: string } }
    __v: number
}