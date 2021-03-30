import express from 'express'
import { addNewUser } from '../controllers/usersController.js'

const router = express.Router()

router.get('/', async (req, res) => {
    res.send("Hello from Users route.")
})

router.post("/add-user", addNewUser)


export default router