
//importing a database package
const mongoose = require('mongoose')



// External file 
// has functions (connection function)
// make a unique function name
// Export




//creating a function
const connectDatabase = () => {
    //localhost: is ip address
    mongoose.connect(process.env.MONGODB_LOCAL).then(() => {
        console.log("Database connected!")

    })

}

// Exporting the function
module.exports = connectDatabase