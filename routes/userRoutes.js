const router = require('express').Router();

//importing the file manually
const userController = require('../controllers/userControllers')


//creating user registration route
router.post('/create', userController.createUser)


module.exports = router


//flow
// controller (export) --> routes (import) -- use -- index.js