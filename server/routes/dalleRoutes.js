import express from 'express';
import * as dotenv from 'dotenv';
import { Configuration, OpenAIApi } from 'openai';

import Post from '../mongodb/models/post.js';

dotenv.config(); //makes sure our environment variables are being populated

const router = express.Router();

const configuration = new Configuration({
  apiKey: process.env.OPENAI_API_KEY,
});

const openai = new OpenAIApi(configuration);

//to see if below working go to http://localhost:8080/api/v1/dalle
router.route('/').get((req, res) => {
  res.send('Hello from Dall-e') 
});

router.route('/').post(async (req, res) => { //need to make it async because it will take some time - **I'm starting to think this is the reason you use a promise or async, when you have an instance where you might have to wait for something, that way it won't run until it's done sending or getting what it needs
  try {
    const { object } = req.body; //this is coming from our front end side
    //getting image here
    // const aiResponse = await openai.createImage({
    //   prompt,
    //   n: 1, //1 image
    //   size: '1024x1024', //size of image
    //   response_format: 'b64_json',
    // });

    const response = await openai.createChatCompletion(object);

    // const image = aiResponse.data.data[0].b64_json; //get image out of above response
    // res.status(200).json({ photo: image }); //pass in a photo that will be equal to the image - *send it to the front end
    res.status(200).json({ text: response.data.choices[0].message.content })
  } catch (error) {
    console.error(error);
    res.status(500).send(error?.response.data.error.message || 'Something went wrong');
  }
});

export default router;