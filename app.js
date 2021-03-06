const express = require("express");
const cronJob = require('./cron/cronfile');
const mongoose = require('mongoose');
let bodyParser = require('body-parser');
const config = require('./config/config');
const routes = require('./routes/route');
app = express();

mongoose.connect(config.mongoDB.URL, {
    useNewUrlParser: true
}).then(() => {
    console.log("Connected to the DB");
}).catch(err => {
    console.log("Couldn't connect to the DB...", err);
    process.exit(0);
});

app.use(bodyParser.urlencoded({
    extended: true
 }));
 app.use(bodyParser.json());

cronJob.cron();

app.use('/', routes);

app.listen(config.server.PORT, (error) => {
    if (error){
        console.log("server not able to start",error);
    }
    console.log(`Server started on port`, config.server.PORT);
});
