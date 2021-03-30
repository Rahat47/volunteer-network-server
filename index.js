import express from 'express'
import cors from 'cors'
import eventRoutes from './routes/events.js'
import userRoutes from './routes/users.js'
import mongoose from 'mongoose'
import { dbName, dbPass, dbUser, port } from './variables.js'
const app = express()

app.use(cors())
app.use(express.json())
app.use(express.urlencoded({ extended: false }))

app.use("/events", eventRoutes)
app.use("/users", userRoutes)

const uri = `mongodb+srv://${dbUser}:${dbPass}@cluster0.77zrg.mongodb.net/${dbName}?retryWrites=true&w=majority`


mongoose.connect(uri, { useNewUrlParser: true, useUnifiedTopology: true })
    .then(() => {
        app.listen(port, () => {
            console.log(`We are connected to server at port ${port}`);
        })
    })
    .catch((err) => {
        console.log(err);
    })

mongoose.set('useFindAndModify', false)


app.get("/", async (req, res) => {
    res.send("Hello from the API")
})
