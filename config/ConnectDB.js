const mongoose = require ("mongoose")


const connectDb = async () => {
    try {
        await mongoose.connect(process.env.DB_URI)
    
        console.log("databse is connected")
    } catch (error) {
        console.log("databse not connected")


    }
}
module.exports=connectDb