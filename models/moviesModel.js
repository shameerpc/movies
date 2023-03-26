var mongoose = require("mongoose");
var { Schema } = mongoose;

var movieSchema = new Schema({
  title: {
    type: String,
  },
  date: { type: Date, default: Date.now },
  release_date: {
    type: Date,
    default: "false",
  },
  director: {
    type: String,
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
