import { model, models, Schema } from 'mongoose'

const ArticleSchema = new Schema({
    description: String,
    href: String,
    imageHref: String,
    title: String,
}, { timestamps: true })

const ArticleM = models.Article || model('Article', ArticleSchema)

export default ArticleM