
const express= require("express")

//create instance
const app=express()

app.use(express.json());


require("dotenv").config();

//connect our DB
const ConnectDB = require("./config/ConnectDB")
ConnectDB();



app.use('/api/User' , require ('./Routes/User'))

app.use('/api/Admin' , require ('./Routes/Admin'))

app.use('/api/Product' , require ('./Routes/Product'))


app.use ('/api/Order' , require ('./Routes/Order'))






const PORT= process.env.PORT

// create server
app.listen(PORT,error => {
    error ? console.error(` Fail to connect ,${error}`) :
    console.log(`server is running on port ${PORT}`)

}) 