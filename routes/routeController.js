const UrlShorten = require('../models/urlSchema');
const config = require('../config/config');
let resUrls = "";

exports.findOne = (req, res) => {
    //UrlShorten.findOneAndDelete({ _id : req.params.noteId })
    UrlShorten.findById(req.params.noteId)
    .then(note => {
        if(!note) {
            return res.status(404).send({
                message: "Not found for noteId " + req.params.noteId
            });            
        }
        res.send(note);
        
    }).catch(err => {
        if(err.kind === 'ObjectId') {
            return res.status(404).send({
                message: "Not found for noteId " + req.params.noteId
            });                
        }
        return res.status(500).send({
            message: "Error retrieving data for noteId " + req.params.noteId
        });
    });
};

exports.findAll = (req, res) => {
    UrlShorten.find({ }).limit(config.getUrl.numberOfUrls).exec(function(err, users) {
        if (err) throw err;
        for (var i=0;i<users.length;i++) {
            console.log(users[i].urlCode);
            resUrls+=users[i].urlCode;
        }
        res.send(resUrls);
      /*  for(var j=0;j<arr.length;j++){
            UrlShorten.findOneAndDelete({urlCode: arr[i]})
            .then(notes => {
                res.send(notes);
            }).catch(err => {
                res.status(500).send({
                    message: err.message || "Error occurred"
                });
            });
        }*/
    });
 
};
