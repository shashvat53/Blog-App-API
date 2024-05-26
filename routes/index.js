const express = require("express");

const router = express.Router();

const { createComment } = require("../controllers/commentController");
const { createPost, getAllPost } = require("../controllers/postController");
const { createLike, unlikePost } = require("../controllers/likeController");

router.post("/createComment", createComment);
router.post("/createPost", createPost);
router.post("/createLike", createLike);
router.post("/unlikePost", unlikePost);
router.get("/getAllPost", getAllPost);

module.exports = router;
