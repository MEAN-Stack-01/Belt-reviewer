const mongoose = require('mongoose');

const ProductSchema  = require('../models/models');

const Product = mongoose.model('Product',ProductSchema);

module.exports = {

  index : (req, res) => {
    Product.find({})
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

  create : (req,res) => {
    Product.create(req.body)
      .then(
        data => {
          console.log("IN CONTROLLER CREATE",data);
          res.json({status: true, messages: {success:"Product successfully added!"},item:data})
        }
      )
      .catch(
        err => {
          console.log("IN CONTROLLER CREATE ERRORS",err);
          if(err){
            let messages = {}
            for (let key in err.errors){
              messages[key] = err.errors[key].message;
            }
            res.json({status: false, messages: messages })
          }
        }
      )
  },

  getOne : (req, res) => {
    Product.findOne({_id:req.params.id})
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

  update : (req, res) => {
    Product.findOneAndUpdate({_id:req.params.id},{$set:req.body},{runValidators: true,context: 'query'})
      .then(
        data => {
          console.log("IN CONTROLLER update",data);
          res.json({status: true, messages: {success:"Product updated successfully!"},item:data})
        }
      )
      .catch(
        err => {
          console.log("IN CONTROLLER update errors",err);
          if(err){
            let messages = {}
            for (let key in err.errors){
              messages[key] = err.errors[key].message;
            }
            res.json({status: false, messages: messages })
          }
        }
      )
  },

  deleteOne : (req, res) => {
    Product.deleteOne({_id:req.params.id})
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
