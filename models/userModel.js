var mongoose = require("bluebird").promisifyAll(require("mongoose"));
var { Schema } = mongoose;

var userSchema = new Schema(
  {
    username: {
      type: "string",
    },
    email: {
      type: "string",
    },
    password: {
      type: "string",
    }
  }
);



module.exports = mongoose.model("User", userSchema);
