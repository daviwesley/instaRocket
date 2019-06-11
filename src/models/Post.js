const mongoose = require("mongoose");

const Post = new mongoose.Schema(
  {
    author: String,
    place: String,
    description: String,
    hashtag: String,
    likes: {
      type: Number,
      default: 0
    }
  },
  {
    timestamps: true
  }
);

module.exports = mongoose.model("Post", Post);
