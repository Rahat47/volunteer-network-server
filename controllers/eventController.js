import EventsModel from "../models/eventsModel.js";

export const addAllEvents = async (req, res) => {
    const events = req.body
    try {
        const response = await EventsModel.insertMany(events)
        res.status(201).json(response)
    } catch (error) {
        res.status(404).json({ message: error.message })
    }
}

export const fetchAllEvents = async (req, res) => {
    try {
        const data = await EventsModel.find()
        res.status(200).json(data)
    } catch (error) {
        res.status(404).json({ message: error.message })
    }
}