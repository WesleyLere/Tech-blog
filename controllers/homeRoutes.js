const { User, Post, Comment } = require('../models');
const withAuth = require('../utils/auth');

const router = require('express').Router();

router.get('/', async (req, res) => {
    try {
        // Get all posts and JOIN with user data
        const postData = await Post.findAll({
            include: [
                {
                    model: User,
                    exclude: ['password']
                },
            ],
        });

        // Serialize data so the template can read it
        const posts = postData.map((post) => post.get({ plain: true }));

        // Pass serialized data and session flag into template
        res.render('homepage'
            , {
                posts,
                logged_in: req.session.logged_in
            }
        );
    } catch (err) {
        res.status(500).json(err);
    }
})

router.get('/login', async (req, res) => {
    await res.render('login')

})

router.get('/dashboard', withAuth, async (req, res) => {
    try {
        // Get all posts and JOIN with user data
        const postData = await Post.findAll({

            include: [
                {
                    model: User,
                    exclude: ['password']
                },
            ],
            where: { user_id: req.session.user_id },
        });

        // Serialize data so the template can read it
        const posts = postData.map((post) => post.get({ plain: true }));

        // Pass serialized data and session flag into template
        res.render('dashboard'
            , {
                posts,
                logged_in: req.session.logged_in
            }
        );
    } catch (err) {
        res.status(500).json(err);
    }
})

router.get('/addpost', (req, res) => {
    res.render('addPost')

})

router.get('/post/:id', async (req, res) => {
    
    try {
        console.log('hello world')
        const singlePostData = await Post.findByPk(req.params.id, {
            include: [
                User,
                {
                    model: Comment,
                    include: [User],
                },
            ],
        })
       
        const commentData = await Comment.findAll(req.params.post_id, {
            include: [{
                model: Post
            }]
        })
  
    //     const userCommentData = await User.findOne(req.params.user_id, {
    //         include: [
    //             User,
    //             {
    //                 model: Comment,
    //                 include: [User],
    //             },
    //         ],
    //   })
  
         console.log('commentdata', commentData)
        // const users = userCommentData.map((username) => username.get({ plain: true }));
        const singlePost = singlePostData.get({ plain: true });
        const comments = commentData.map((comment) => comment.get({ plain: true }));
        res.render('comment'
            ,
            {
                // users,
                singlePost,
                comments,
                logged_in: req.session.logged_in
            }
        );
    } catch (err) {
        res.json(err)
    }
  
  })
  
  router.get('/update', async (req, res) => {
    await res.render('update')

})

module.exports = router;

