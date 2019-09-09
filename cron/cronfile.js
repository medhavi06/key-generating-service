const newSchema = require('../models/schema_DB');
const cron = require("node-cron");
btoa = require('btoa');
require('dotenv').config();

module.exports = (app) => {
    cron.schedule("0 6 * * *", function() {
        console.log("running daily at 6");
        for(var i = 0; i < process.env.TIMES;i++){
            var d = new Date();
            const code = d.getTime(); 
            console.log(code);
            const code1 = code % 1000;
            const code2 = code / 10000000000; 
            const encoded = btoa(code).substr(4,6);
            const short_url = "http://shortened.com/" + code1 + encoded  + parseInt(code2);
            console.log(short_url);
            const note = new newSchema({
                urlCode: code,
                shortUrl: short_url
            });    
            note.save();
        }
    });
}