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
    let deleteUrl = [];
    UrlShorten.find({ }, {shortUrl:1, _id:0}).limit(config.getUrl.numberOfUrls).exec(function(err, urls) {
        if (err) throw err;
        //console.log(urls);
        for (let i=0;i<urls.length;i++){
            deleteUrl.push(urls[i].shortUrl);
        }
        console.log("deleteURL",deleteUrl);
        res.status(200).json(urls);
        UrlShorten.deleteMany({ shortUrl :{ $in: deleteUrl}}, function(err, data) {
            if (err) {
                console.log(err);
            } else {
                console.log(data);
            }
        });
    });

};
