const express = require("express");
const router = express.Router();

router.get('/', (req, res) => {
    res.send('TIMESHEET API Version 1');
  });

  router.use("/signin",require('./signin.routes'));
  router.use("/signup",require('./signup.routes'));
  router.use("/movies",require('./movies.routes'));


  router.use((err, req, res) => {
    if (err)
      res.status(500).json({
        status: false,
        error: 'Something went wrong',
      });
  });  

 module.exports = router;