const router = require('express').Router();
const { Post } = require('../../models');
const withAuth = require('../../utils/auth');

router.post('/new', withAuth,  async (req, res) => {
  try {
    const newPost = await Post.create({
      ...req.body,
      user_id: req.session.user_id,
    })
    res.status(200).json(newPost);
    res.render('/')
  } catch (err) {
    res.status(400).json(err);
    console.log(err)
  }
});

module.exports = router;