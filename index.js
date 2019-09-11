const express = require("express");
app = express();
const mongoose = require('mongoose');
const PORT = 3000;
require('dotenv').config();

app.set('port', process.env.PORT || 4100);
const db_url = process.env.DATABASE;

mongoose.connect(db_url, {
    useNewUrlParser: true
}).then(() => {
    console.log("Connected to the DB");    
}).catch(err => {
    console.log("Couldn't connect to the DB...", err);
    process.exit();
});

let cronJob = require('./cron/cronfile');
cronJob.cron();

app.listen(PORT, () => {
    console.log(`Server started on port`, PORT);
});
