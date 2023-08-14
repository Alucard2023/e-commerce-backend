const mongoose = require("mongoose") ;

// create schema 
const {Schema , model } = mongoose ;

const ProductSchema = new Schema({
    
    name : {
        type: String,     
    },
    
    description : {
        type: String,
    },
    prix : {
        type: String,
    },


    reference : {
        type: String,
    },

   
  

   imageURL : {
       type : String 
    },
    


}, { timestamps: true })


module.exports = Product = model('product', ProductSchema)