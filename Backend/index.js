const express = require('express')
const mongoose = require('mongoose')
const routes = require('./routes/routes')
const cookieParser = require('cookie-parser')
const cors = require('cors')
const app = express()
    //app.use("/api", routes)
app.use(cors({
    credentials: true,
    origin: ['http://localhost:4200']
}))

app.use(cookieParser())
app.use(express.json())
app.use("/api", routes)

mongoose.connect("mongodb://localhost:27017/JobFinder", {
        useNewUrlParser: true,
        //useUnifiedToplogy: true
    })
    .then(() => {
        console.log("connected to database")

        app.listen(5000, () => {
            console.log("App is listening on port 5000")
        })
    })