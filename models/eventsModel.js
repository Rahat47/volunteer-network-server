import mongoose from 'mongoose'

const eventSchema = mongoose.Schema({
    title: String,
    created_date: {
        type: Date,
        default: new Date()
    },
    creator: String,
    description: String,
    volunteers: {
        type: [String],
        default: []
    },
    imageURL: String
})


const EventsModel = mongoose.model("events", eventSchema)

export default EventsModel