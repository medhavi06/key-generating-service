const cron = require("node-cron");
const express = require("express");
app = express();
//const fs = require("fs");
const bodyParser = require('body-parser');
const mongoose = require('mongoose');
require('dotenv').config();
const PORT = 3000;

app.set('port', process.env.PORT || 4100);
const db_url = process.env.DATABASE;

/*app.use(bodyParser.json());

app.get("/", (req, res) => {
    res.send("Hey there! KGS here");
});
*/

const shortSchema = mongoose.Schema({
    urlCode: String,
    shortUrl: String
  });

const newSchema = mongoose.model("newSchema", shortSchema);

mongoose.connect(db_url, {
    useNewUrlParser: true
}).then(() => {
    console.log("Connected to the DB");    
}).catch(err => {
    console.log("Couldn't connect to the DB...", err);
    process.exit();
});

cron.schedule("* 6 * * *", function() {
    console.log("running daily at 6");
    for(var i = 0; i < process.env.TIMES;i++){
        var d = new Date();
        const code = d.getTime(); 
        code = code%100;   
        const short_url = "http://shortened.com/" + code;
        console.log(short_url);
        const note = new newSchema({
            urlCode: code,
            shortUrl: short_url
        });    
        note.save();
    }
});

app.listen(PORT, () => {
    console.log(`Server started on port`, PORT);
});
