import mongoose from 'mongoose';

//create schema
const Post = new mongoose.Schema({
  name: { type: String, required: true },
  prompt: { type: String, required: true },
  industry: { type: String, required: true },
  productsAndServices: { type: String, required: true },
  keyMarketSegments: { type: String, required: true },
  competitiveAnalysis: { type: String, required: true },
  // photo: { type: String, required: true },
});

//create model out of the above schema
const PostSchema = mongoose.model('Post', Post);

export default PostSchema;