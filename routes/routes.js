const express = require('express');
const queries = require('../db/queries.js');
const passport = require('passport');

const env = {
  AUTH0_CLIENT_ID: 'p9Ckvwt-zR0jR-oU73QZl-uoxycmGDIR',
  AUTH0_DOMAIN: 'joscelyn-james.auth0.com',
  AUTH0_CALLBACK_URL: 'http://localhost:3210/login'
};

var router = express.Router();

router.get('/blog', (req, res) => {
  queries
    .blogs
    .getAllBlogs()
    .then(blogPosts => {
      res.json(blogPosts)
    })
});

router.get('/blog/:id', (req, res) => {
  queries
    .blogs.blog
    .getOneBlog(req)
    .then(blog => {
      res.json(blog)
    })
});

router.get('/blog/:id/comments', (req, res) => {
  queries
    .blogs.comments
    .getAllComments(req)
    .then(comments => {
      res.json(comments)
    })
});

router.post('/blogpost', (req, res) => {
  queries
    .post
    .makeBlogPost(req, res)
    .then(post => {
      res.send(post)
    })
});

router.post('/commentpost', (req, res) => {
  queries
    .post
    .makeCommentPost(req, res)
    .then(post => {
      res.send('sucsess')
    })
});

router.patch('/editblog', (req, res) => {
  queries
    .patch
    .makeBlogPatch(req)
    .then(patch => {
      res.json(patch)
    })
});

router.patch('/editcomment', (req, res) => {
  queries
    .patch
    .makeCommenntPatch(req)
    .then(patch => {
      res.json(patch)
    })
});

router.delete('/deleteblog/:id', (req, res) => {
  queries
    .delete
    .makeBlogDelete(req)
    .then(deleted => {
      res.json(deleted)
    })
});

router.delete('/deletecomment/:id', (req, res) => {
  queries
    .delete
    .makeCommentDelete(req)
    .then(deleted => {
      res.json(deleted)
    })
});

module.exports = router
