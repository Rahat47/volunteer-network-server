import express from 'express'
import { addAllEvents, fetchAllEvents } from '../controllers/eventController.js'

const router = express.Router()

router.get('/', fetchAllEvents)

router.post('/add-all-events', addAllEvents)


export default router