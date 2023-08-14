const mongoose = require("mongoose") ;

// create schema 
const {Schema , model } = mongoose ;



const OrderSchema = new Schema({

    email : {
        type: String,
        required: true,
       },

       productname : {
        type: String,  
        required : true 
    },
    
    reference : {
        type: String,
    },

    adresse : {
        type: String, 
        required: true,
    } ,
    phone : {   
        type : Number ,
        required: true,
    },
    
})

module.exports = Order = model('order', OrderSchema)