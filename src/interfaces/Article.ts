export default interface IArticle {
    _id: { $oid: string }
    description: string
    href: string
    imageHref: string
    title: string
    createdAt: { $date: { $numberLong: string } }
    updatedAt: { $date: { $numberLong: string } }
    __v: number
}