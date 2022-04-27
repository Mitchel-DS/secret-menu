// require mongoose
const mongoose = require('mongoose')

// connect to MongoDB
const connectDB = () => {
  try {

    mongoose.connect(process.env.CONNECTION_STRING, {
      useNewUrlParser: true,
      useUnifiedTopology: true
    });
    console.log('DB - Connection succesful!')
  } catch (err) {
    console.log('error occured while trying to connect to db',)
  }
}

// export connectDB function 
module.exports = connectDB