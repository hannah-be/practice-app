const mongoose = require("./init");

// Define model using mongoose
var Attempt = mongoose.model("Attempt", {
  // List each attribute as a set of key-value pairs
  name: { type: String, required: [true, "You need a name!"] }
});

// Export the model
module.exports = Attempt;
