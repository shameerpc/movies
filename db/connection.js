
const mongoose = require('mongoose');
const config = require('../configs/config');

const options = {
  useNewUrlParser: true,
  useUnifiedTopology: true
};

const connectDb=mongoose.connect(config.api.DATABASE_URL, options)
  .then(() => console.log('Connected to MongoDB'))
  .catch(err => console.error('Error connecting to MongoDB', err));

  const db = mongoose.connection;
  db.on('error', console.error.bind(console, 'connection error:'));
  db.once('open', function() {
    console.log('Connected to MongoDB');
  });
  module.exports = connectDb;



  
  
  
  
  
  