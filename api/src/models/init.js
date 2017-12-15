const mongoose = require("mongoose");

// Use localhost/test for our development but would be specified with env variables for production…
mongoose.connect("mongodb://localhost/test", { useMongoClient: true });
// Use the built in promise library/functionality built into node.js
mongoose.Promise = global.Promise;

module.exports = mongoose;
