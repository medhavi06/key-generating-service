const newSchema = require('../models/urlSchema');
const cron = require("node-cron");
const btoa = require('btoa');
const config = require('../config/config');

exports.cron = function(){
    cron.schedule("10 0 * * *", function() {
        for(let i = 0; i < config.cron.numberOfKeys; i++){
            let d = new Date();
            let code = d.getTime();
            let code1 = code % 10000;
            let code2 = code / 10000000000;
            console.log(code + " : " + code1 + " : " + code2 + " : ");
            console.log(code.toString().substr(3,6));
            let encoded = code1 + btoa(code).substr(3,6) + parseInt(code2);
            let note = new newSchema({
                urlCode: encoded
            });
            note.save();
        }
    });
};
