var express = require('express')
var queries = require('../db/queries.js')

var router = express.Router()

router.get('/blog', (req, res) => {
  queries
    .blogs
    .getAllBlogs()
    .then(blogPosts => {
      res.json(blogPosts)
    })
})

router.get('/blog/:id', (req, res) => {
  queries
    .blogs.blog
    .getOneBlog(req)
    .then(blog => {
      res.json(blog)
    })
})

router.get('/blog/:id/comments', (req, res) => {
  queries
    .blogs.comments
    .getAllComments(req)
    .then(comments => {
      res.json(comments)
    })
})

router.post('/blogpost', (req, res) => {
  queries
    .post
    .makePost(req)
    .then(post => {
      res.json(post)
    })
})

router.patch('/editblog', (req, res) => {
  queries
    .patch
    .makeBlogPatch(req)
    .then(patch => {
      res.json(patch)
    })
})

router.delete('/deleteblog', (req, res) => {
  queries
    .delete
    .makeBlogDelete(req)
    .then(deleted => {
      res.json(deleted)
    })
})

module.exports = router
