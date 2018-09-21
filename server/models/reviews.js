const mongoose = require('./mongoose');
var validate = require('mongoose-validator');

var ReviewSchema = new mongoose.Schema({
  reviewer : {
    type: String,
    required: [true, "Name is required"],
    minlength: [3, "Title should be more than 3 characters"]
  },
  rating : {
    type: Number,
    required : [true, "Rating is required"],
    min: [1, "Rating must be between 1 and 5"],
    max: [5, "Rating must be between 1 and 5"]
  },
  comment: {
    type: String,
    required: [true, "Review is required"],
    minlength: [3, "Review should be more than 3 characters"]
  }
},{timestamps: true})

module.exports = ReviewSchema
