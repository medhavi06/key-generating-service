const newSchema = require('../models/urlSchema');
const cron = require("node-cron");
const btoa = require('btoa');
const config = require('../config/config');

exports.cron = function(){
    cron.schedule("10 0 * * *", function() {
        for(let i = 0; i < config.cron.NumberOfKeys;i++){
            let d = new Date();
            let code = d.getTime();
            let code1 = code % 1000;
            let code2 = code / 10000000000;
            let encoded = btoa(code).substr(4,6);
            let shortUrlCreated = config.cron.shortURL + code1 + encoded  + parseInt(code2);
            let note = new newSchema({
                urlCode: code,
                shortUrl: shortUrlCreated
            });
            note.save();
        }
    });
};
