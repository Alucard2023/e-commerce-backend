const mongoose = require("mongoose")

const {Schema , model} = mongoose ;

const userSchema = mongoose.Schema({

    firstname : {
        type : String,
        required : true
    },

    lastname : {
        type : String,
        required : true
    },

    email : {
        type : String,
        required : true ,
        unique : true 
    },
    password : {
        type : String,
        required : true ,
    },
    isAdmin:{ type: Boolean},


})


module.exports = User = mongoose.model('User',userSchema)