const Like = require("../models/likeModel");
const Post = require("../models/postModel");

exports.createLike = async (req, res) => {
  try {
    const { post, user } = req.body;
    const like = new Like({
      post,
      user,
    });

    const saveLike = await like.save();

    const updatedLike = await Post.findByIdAndUpdate(
      post,
      { $push: { likes: saveLike._id } },
      { new: true }
    )
      .populate("likes")
      .exec();

    res.status(200).json({
      success: true,
      data: updatedLike,
      message: "Like created successfully",
    });
  } catch (error) {
    res.status(500).json({
      success: false,
      data: error.message,
      message: "error while creating Like ",
    });
  }
};

exports.unlikePost = async (req, res) => {
  try {
    const { post, like } = req.body;
    const removeLike = await Like.findOneAndDelete({ post: post, _id: like });
    const updatedPost = await Post.findByIdAndUpdate(
      post,
      { $pull: { likes: removeLike._id } },
      { new: true }
    )
      .populate("likes")
      .exec();

    res.status(200).json({
      success: true,
      message: "Unlike the post successfully",
    });
  } catch (error) {
    res.status(500).json({
      success: false,
      message: "Error while Unlike Post",
    });
  }
};
