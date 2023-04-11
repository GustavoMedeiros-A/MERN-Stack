require("dotenv").config();

const express = require('express');
const workoutRoutes = require("./routes/workouts")
// const mongoose = require('mongoose');
require("./database/database")


const app = express()

// Middleware is in the middle of the request and response
app.use(express.json()); // using this we can use req.json to catch datas from the body

app.use((req, res, next) => {
    console.log(req.path, req.method);
    next();
})

//routes
app.use("/api/workouts", workoutRoutes)

// connect to DB
// in database folder

// listen for requests
app.listen(process.env.PORT, () => {
    console.log("Listening on port 4000...")
})

