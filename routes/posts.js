const express = require('express');
const router = express.Router();
const Post = require('../models/Post')

// get all data
router.get("/", async(req, res) => {
    try {
        const posts = await Post.find() // method of mongoose
        res.json(posts)
    } catch (err) {
        res.json({
            message: err
        })
    }
});
// post data
router.post('/', async(req, res) => {
    const post = new Post({
        title: req.body.title,
        description: req.body.description
    });
    try {
        const savedPost = await post.save();
        res.json(savedPost);
    } catch (err) {
        res.json({
            message: err
        })
    }
});

// get specific post
router.get('/:postId', async(req, res) => {
    try {
        const post = await Post.findById(req.params.postId) // req.params. ->  url 
        res.json(post)
    } catch (err) {
        res.json({
            message: err
        })
    }
})
module.exports = router;