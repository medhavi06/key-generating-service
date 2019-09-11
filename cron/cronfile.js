const newSchema = require('../models/urlSchema');
const cron = require("node-cron");
const winston = require('winston')
btoa = require('btoa');
require('dotenv').config();

exports.cron = function(){
    cron.schedule("0 6 * * *", function() {
        for(let i = 0; i < process.env.TIMES;i++){
            let d = new Date();
            let code = d.getTime(); 
            let code1 = code % 1000;
            let code2 = code / 10000000000; 
            let encoded = btoa(code).substr(4,6);
            let short_url = process.env.URL + code1 + encoded  + parseInt(code2);
            let note = new newSchema({
                urlCode: code,
                shortUrl: short_url
            });    
            note.save();
        }
    });
}
