const router = require('express').Router();
const { Post } = require('../../models');
const withAuth = require('../../utils/auth');

router.post('/new', withAuth, async (req, res) => {
  try {
    const newPost = await Post.create({
      ...req.body,
      user_id: req.session.user_id,
    })
    res.status(200).json(newPost);
  } catch (err) {
    res.status(400).json(err);
    console.log(err)
  }
});

router.put('/update/:id', withAuth, async (req, res) => {
  try {
    const updatePost = await
      Post.update(
        {
          title: req.body.title,
          body: req.body.body,
        },
        {
          where:
          {
            id: req.params.id,
          }
        }
      )
    res.status(200).json(updatePost)
  } catch (err) {
    res.status(400).json(err);
    console.log(err)
  }
})

module.exports = router;