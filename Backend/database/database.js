const mongoose = require("mongoose");
mongoose.Promise = global.Promise;

mongoose.set("strictQuery", true);

mongoose.connect("mongodb://127.0.0.1/workouts", { useNewUrlParser: true, useUnifiedTopology: true })
.then(() => console.log("Connect to MongoDB"))
.catch((err) => console.log(err))