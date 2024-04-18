
// importing the packages (package name=express)
const express = require('express');
const mongoose = require('mongoose');
const connectDatabase = require('./database/database');
const dotenv = require('dotenv')




// creating an express app (using it)
const app = express();


//dotenv Configuration
dotenv.config()




// connecting to database

//previous  {{{{
// mongoose.connect(process.env.MONGODB_LOCAL).then(() => {
//console.log("Database connected!") 
//  }}}}}


connectDatabase()



// defining the port
const PORT = process.env.PORT;


// making a test endpoint
//Endpoints: 4 => POST, GET, PUT, DELETE




// get method==> request and response parameters
// api endpoint is (/test)
app.get('/test', (req, res)=>{

    res.send("Test API is working!....")
}) 




// configuring routes of user
app.use('/api/user', require('./routes/userRoutes'))

// developed api :::::::>>>>>       http://localhost:5000/api/user/create
























// starting the server
app.listen(PORT, ()=>{

    //message
  console.log( `Server is running on port ${PORT}!` )

})

// api endpoint
//http://localhost:5000/test
