const mongoose = require('./mongoose');
var validate = require('mongoose-validator');

const ReviewSchema  = require('../models/reviews');

var MovieSchema = new mongoose.Schema({
  title : {
    type: String,
    required: [true, "Name is required"],
    minlength: [3, "Title should be more than 3 characters"]
  },
  reviews : [ReviewSchema]
},{timestamps: true})

module.exports = MovieSchema
