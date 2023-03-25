require("express-async-errors");
const dotenv = require("dotenv");
const Movie = require("../models/moviesModel")
const bodyParser = require("body-parser");
const bcrypt = require("bcryptjs");

exports.create = (req, res) => {
 
    const newMovie = new Movie({
      title : req.body.title,
      director : req.body.director,
      release_date : req.body.release_date,
      rating : req.body.rating
      // other fields...
    });
    
    newMovie.save()
      .then(savedMovie => {
        console.log("movies="+savedMovie);
        res.json({
          status: "success",
          message: 'Successfully Created',
          data: savedMovie
      });
      })
      .catch(err => {
        console.error(err);
        res.json({
          status: "error",
          message: err,
      });
      });
    
};
exports.deletemovies = function (req, res) {
  Movie.findById(req.params.id, function (err, result) {
    console.log(result);
    if (!result) {
      res.json({
        status: "error",
        message: "no record find with the given id",
      });
    }

    if (err) {
      res.json({
        status: "error",
        message: err,
      });
    }
    result.delstatus = true;
    result.save(function (err) {
      if (err) {
        res.json({
          status: "error",
          message: err,
        });
      }

      res.json({
        status: "success",
        message: "Deleted Successfully",
        data: result,
      });
    });
  });
};
exports.updatemovies = async (req, res, next) => {
  console.log("hii");
  Movie.findById(req.params.id, (err, updateItem) => {
    console.log(updateItem)
    if (err) {
      res.json({
        status: "error",
        message: err,
      });
    } else {
      updateItem.title = req.body.title;
      updateItem.release_date = req.body.release_date;
      updateItem.director = req.body.director;
      updateItem.rating = req.body.rating;

      updateItem.save((err) => {
        if (err) {
          res.json({
            status: "error",
            message: err,
          });
        } else {
          res.json({
            status: "success",
            message: "Updated Successfully",
            data: updateItem,
          });
        }
      });
    }
  });
};

exports.getmovies = (req, res) => {
  Movie.find({
    delstatus: false,
  })
    .then(function (list) {
      res.json({
        status: "success",
        message: "project retrieved successfully",
        data: list,
      });
    })
    .catch((err) => {
      res.json({
        status: "error",
        message: err,
      });
    });
};
exports.getmoviesbyid = async (req, res, next) => {
  console.log(req.params.id);
    const moviesdata = await Movie.findOne({ _id: req.params.id }, (err, result) => {

      console.log(result)
      if (err) {
        consosle.log(err)
        res.json({
          status: "error",
          message: err,
        });
      } else {
        res.json({
          status: "success",
          message: 'movies details loading..',
          data: result
        });
      }
    })
  }   
