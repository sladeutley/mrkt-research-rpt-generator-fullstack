import mongoose from 'mongoose'

const connectDB = (url) => {
  mongoose.set('strictQuery', true) //this option will be helpful with search functionality

  //connect our database
  mongoose.connect(url)
    .then(() => console.log('MongoDB connected'))
    .catch((err) => console.log(err))
}

export default connectDB