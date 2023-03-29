import express from 'express';
import * as dotenv from 'dotenv';
import { v2 as cloudinary } from 'cloudinary';

import Post from '../mongodb/models/post.js';

dotenv.config(); //makes sure our environment variables are being populated

const router = express.Router();

cloudinary.config({
  cloud_name: process.env.CLOUDINARY_CLOUD_NAME,
  api_key: process.env.CLOUDINARY_API_KEY,
  api_secret: process.env.CLOUDINARY_API_SECRET,
});

// GET ALL POSTS
router.route('/').get(async (req, res) => {
  try {
    const posts = await Post.find({});
    res.status(200).json({ success: true, data: posts });
  } catch (err) {
    // res.status(500).json({ success: false, message: err }); //this is what he had on github instead of below (which is what he did in video) - not sure difference
    res.status(500).json({ success: false, message: 'Fetching posts failed, please try again' });
  }
});

// CREATE A POST
router.route('/').post(async (req, res) => {
  try {
    // const { name, prompt, industry, productsAndServices, keyMarketSegments, competitiveAnalysis, photo  } = req.body; //get all the data we're getting from frontend
    const { name, prompt, industry, productsAndServices, keyMarketSegments, competitiveAnalysis  } = req.body; //get all the data we're getting from frontend
    
    // const photoUrl = await cloudinary.uploader.upload(photo); //upload the photo url to cloudinary

    //create new post in our database
    const newPost = await Post.create({
      name,
      prompt,
      industry,
      productsAndServices,
      keyMarketSegments,
      competitiveAnalysis
      // photo: photoUrl.url,
    });

    // res.status(200).json({ success: true, data: newPost }); //this is what he had on github instead of below (which is what he did in video) - not sure difference
    res.status(201).json({ success: true, data: newPost });
  } catch (err) {
    res.status(500).json({ success: false, message: 'Unable to create a post, please try again' });
  }
});

export default router;