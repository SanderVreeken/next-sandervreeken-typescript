import { model, models, Schema } from 'mongoose'

const ServiceSchema = new Schema({
    calendlyHref: String,
    description: String,
    euros: Number,
    minutes: Number,
    title: String,
    topics: [String]
}, { timestamps: true })

const ServiceM = models.Service || model('Service', ServiceSchema)

export default ServiceM