const Post = require("../models/postModel");

exports.createPost = async (req, res) => {
  try {
    const { title, body } = req.body;
    const post = new Post({
      title,
      body,
    });

    savePost = await post.save();

    res.status(200).json({
      success: true,
      data: savePost,
      message: "Post Created Successfully... ",
    });
  } catch (error) {
    res.status(500).json({
      success: false,
      data: error.message,
      message: "Eerror while creating post",
    });
  }
};

exports.getAllPost = async (req, res) => {
  try {
    const response = await Post.find({});
    res.status(200).json({
      success: true,
      data: response,
      message: "Fetched All Posts",
    });
  } catch (error) {
    res.status(500).json({
      success: false,
      data: error.message,
      message: "error while fetching Posts",
    });
  }
};
