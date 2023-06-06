const express = require('express');
const mongoose = require("mongoose");
const foodRouter = require('./controllers/food');
const restaurantRouter = require('./controllers/restaurant');
const userRouter = require("./controllers/users")

require("dotenv").config();

const app = express();

const dburl = process.env.mongo
mongoose.connect(dburl)

app.use(express.static("build"))

app.use(express.json())
app.use("/food", foodRouter)
app.use("/restaurant", restaurantRouter)
app.use("/users", userRouter)

module.exports = app;