import express from 'express';
import * as dotenv from 'dotenv';
import cors from 'cors';

import connectDB from './mongodb/connect.js'
import postRoutes from './routes/postRoutes.js'
import dalleRoutes from './routes/dalleRoutes.js'

dotenv.config(); //allows us to pull our environment variables from our .env file

const app = express() //initiliaze express application

//middleware - i think this is anytime you have 'app.use'
app.use(cors()) //adds additional middlewares to express

app.use(express.json({ limit: '50mb' })) //adds another additional middleware
// app.use(express.json({ limit: '100mb' })) //adds another additional middleware
// we've created api endpoints that we can connect / hook on to from our front end side (*these routes are initially still empty, so still have to add additional routes that we can call from the front end)
app.use('/api/v1/post', postRoutes)
app.use('/api/v1/dalle', dalleRoutes)

//create route - '/' is the root route
app.get('/', async (req, res) => {
  res.send('Hello from DALL-E') //this will help us know if our application is running once we visit the url of our server
  // res.status(200).json({ message: 'Hello from DALL-E!' }); //***He had this on his github instead of above - i think its just another way to do the same thing (not sure though so look into it - even though i think this is just an internal tool we use to make sure we know the backend is working). He did it on index.js file to instead of res.send
});

//need way to run server - to test run in terminal in server folder 'npm start'
const startServer = async () => {
  //connecting to mongo db can fail, so need a 'try' and catch
  try {
    connectDB(process.env.MONGODB_URL); //this is a special url of our mongodb database
    app.listen(8080, () => console.log('Server started on port 8080'));
  } catch (error) {
    console.log(error);
  }
}

startServer()