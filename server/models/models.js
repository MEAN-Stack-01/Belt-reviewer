const mongoose = require('./mongoose');
var validate = require('mongoose-validator');

var ProductSchema = new mongoose.Schema({
  title : {
    type: String,
    required: [true, "Name is required"],
    minlength: [3, "Title should be more than 3 characters"]
  },
  price : {
    type: Number,
    required : [true, "Number is required"],
    // min: [0, "Price cannot be $0"]
  },
  url : {
    type: String,
  }
},{timestamps: true})

module.exports = ProductSchema
