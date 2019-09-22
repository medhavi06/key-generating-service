const mongoose = require("mongoose");
const shortSchema = mongoose.Schema({
    urlCode: String
  });

module.exports = mongoose.model("newSchema", shortSchema);