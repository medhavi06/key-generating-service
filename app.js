const express = require("express");
const cronJob = require('./cron/cronfile');
const mongoose = require('mongoose');
require('dotenv').config();
const config = require('./config/config');
app = express();

mongoose.connect(config.mongoDB.URL, {
    useNewUrlParser: true
}).then(() => {
    console.log("Connected to the DB");
}).catch(err => {
    console.log("Couldn't connect to the DB...", err);
    process.exit();
});

cronJob.cron();
app.listen(config.server.PORT, () => {
    console.log(`Server started on port`, config.server.PORT);
});
