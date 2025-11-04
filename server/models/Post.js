import mongoose from "mongoose";

const commentSchema = new mongoose.Schema({
  text: { type: String, required: true },
  createdAt: { type: Date, default: Date.now }
});

const postSchema = new mongoose.Schema({
  text: { type: String, required: true },
  comments: [commentSchema],
  createdAt: { type: Date, default: Date.now }
});

export default mongoose.model("Post", postSchema);
