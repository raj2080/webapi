
//importing express 
const router = require('express').Router();

//importing the file manually
const userController = require('../controllers/userControllers')


//creating user registration route  (# path) (/create) endpoint + arrow function called createUser which is inside of userController file 

// app.get('/test', (req, res)=>{

// res.send("Test API is working!....")
// })   another form is in 18th line



router.post('/create', userController.createUser)


module.exports = router


//flow
// controller (export) --> routes (import) -- use -- index.js