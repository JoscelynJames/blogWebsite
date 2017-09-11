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

router.get('/blog/:id/:comments', (req, res) => {
  queries
    .blogs.comments
    .getAllComments(req)
    .then(comments => {
      res.json(comments)
    })
})

module.exports = router
