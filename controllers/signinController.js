const debug = require("debug")("todo-api:controllers/todo");
require("express-async-errors");
const User = require("../models/userModel");
const bodyParser = require("body-parser");
const bcrypt = require("bcryptjs");
//const dotenv = require('dotenv');
var jwt = require("jsonwebtoken");
require("dotenv").config();

const signin = {
  postdata: async (req, res, next) => {
    try {
      const { email, password } = req.body;
      console.log(req.body);
      if (!(email && password)) {
        return res
          .status(403)
          .send({ status: false, messege: "All input are required" });
      }
      const user = await User.findOne({ email: email });
      if (!user) {
        return res
          .status(403)
          .send({ status: false, messege: "invalid email" });
      }
      const userpassword = await bcrypt.compare(password, user.password);
      if (!userpassword) {
        return res
          .status(403)
          .send({ status: false, messege: "invalid pasword" });
      }
      if (user && userpassword) {
        // Create token
        const token = jwt.sign(
          { user_id: user._id, email: user.email },
          process.env.SECRET_KEY,
          {
            expiresIn: "4h",
          }
        );
        User.token = token;
        return res
          .status(200)
          .send({
            auth: true,
            token: token,
            user_id: user._id,
            username: user.username,
          });
        res.data = {
          auth: true,
          token: token,
          user_id: user._id,
          username: user.username,
        };
      }
    } catch (err) {
      console.log(err);
      debug("Error occured while fetching all todos");
      throw new Error();
    }
  },
};

module.exports = signin;
