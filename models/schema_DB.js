const mongoose = require("mongoose");
const shortSchema = mongoose.Schema({
    urlCode: String,
    shortUrl: String
  });

module.exports = mongoose.model("newSchema", shortSchema);