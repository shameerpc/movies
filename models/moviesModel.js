var mongoose = require("mongoose");
var { Schema } = mongoose;

var movieSchema = new Schema({
  title: {
    type: "string",
  },
  date: { type: Date, default: Date.now },
  release_date: {
    type: Date,
    default: "false",
  },
  director: {
    type: "string",
  },
  rating: {
    type: Number,
  },
  delstatus: {
    type: Boolean,
    default: false,
  },
});

module.exports = mongoose.model("movie", movieSchema);
