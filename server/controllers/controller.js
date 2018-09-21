const mongoose = require('mongoose');

const ReviewSchema  = require('../models/reviews');
const MovieSchema  = require('../models/movies');

const Review = mongoose.model('Review',ReviewSchema);
const Movie = mongoose.model('Movie',MovieSchema);

module.exports = {

  index : (req, res) => {
    Movie.find({})
      .then(
        data => {
          console.log("IN CONTROLLER INDEX",data);
          res.json({status: true, items: data})
        }
      )
      .catch(
        error => {
          console.log("IN CONTROLLER INDEX ERRORS",error);
          res.json({status: false, message: error})
        }
      )
  },

  // create : function(req, res) {
  //     console.log("POST DATA", req.body);
  //     var msg1 = new Message(req.body);
  //     msg1.save(function(err){
  //       if(err){
  //         for(var key in err.errors){
  //           console.log(key);
  //           console.log(err.errors[key].message);
  //           req.flash(key, err.errors[key].message);
  //         }
  //         res.redirect('/');
  //       }else{
  //         console.log('Message successfully added to the database!');
  //         res.redirect('/');
  //       }
  //     })
  // },

  create : function(req, res)  {
    console.log("POST DATA", req.body);

    var newReview = new Review({reviewer:req.body.name,rating:req.body.ratings,comment:req.body.review});
    newReview.save(function(err){
        if(err){
          let messages = {}
          for (let key in err.errors){
            messages[key] = err.errors[key].message;
          }
          res.json({status: false, messages: messages })
        }
        else {
          var newMovie = new Movie({title:req.body.title})
          newMovie.reviews.push(newReview)
          newMovie.save(function(err){
            if(err){
              let messages = {}
              for (let key in err.errors){
                messages[key] = err.errors[key].message;
              }
                res.json({status: false, messages: messages })
            }
          res.json({status: true, messages: {success:"Product successfully added!"},item: newMovie})
        })
      }
    })
  },

  createReview: function(req, res) {
      console.log("POST DATA", req.body);
      console.log("The movie id is:", req.params.id);
      Review.create(req.body, function(err,data){
        if(err){
          let messages = {}
          for (let key in err.errors){
            messages[key] = err.errors[key].message;
          }
          res.json({status: false, messages: messages })
        }
        else {
          Movie.findOneAndUpdate({_id:req.params.id},{$push: {reviews : data}}, function(err,data){
            if(err){
              let messages = {}
              for (let key in err.errors){
                messages[key] = err.errors[key].message;
              }
              res.json({status: false, messages: messages })
            } else {
              console.log('Message successfully updated with the Comment!');
              res.json({status: true, messages: {success:"Review successfully added!"},item: Movie})            }
          })
        }
      })
    },

  getOne : (req, res) => {
    Movie.findOne({_id:req.params.id})
      .then(
        data => {
          console.log("IN CONTROLLER FINDONE",data);
          res.json({status: true, item: data})
        }
      )
      .catch(
        error => {
          console.log("IN CONTROLLER FINDONE ERRORS",error);
          res.json({status: false, message: error })
        }
      )
  },


  // deleteOne : (req, res) => {
  //   Movie.deleteOne({_id:req.params.id})
  //     .then(
  //       data => {
  //         console.log("IN CONTROLLER delete",data);
  //         Movie.findOneAndUpdate({find},{$op: {reviews : data}}, function(err,data){
  //           if(err){
  //             let messages = {}
  //             for (let key in err.errors){
  //               messages[key] = err.errors[key].message;
  //             }
  //             res.json({status: false, messages: messages })
  //           } else {
  //             console.log('Message successfully updated with the Comment!');
  //             res.json({status: true, messages: {success:"Review successfully added!"},item: Movie})            }
  //         })
  //         // res.json({status: true, messages: {success:"Product deleted successfully!"},item:data})
  //       }
  //     )
  //     .catch(
  //       error => {
  //         console.log("IN CONTROLLER delete errors",error);
  //         res.json({status: false, message: error })
  //       }
  //     )
  // },

  deleteReview : (req, res) => {
    console.log("IN CONTROLLER",req.params.id)
    Review.deleteOne({_id:req.params.id})
      .then(
        data => {
          console.log("IN CONTROLLER delete",data);
          res.json({status: true, messages: {success:"Product deleted successfully!"},item:data})
        }
      )
      .catch(
        error => {
          console.log("IN CONTROLLER delete errors",error);
          res.json({status: false, message: error })
        }
      )
  },

}
