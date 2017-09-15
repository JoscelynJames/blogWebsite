const knex = require('./knex')

module.exports = {
  blogs: {
    getAllBlogs: function () {
      return knex('blog_post')
    },
    blog: {
      getOneBlog: function (req) {
        return knex('blog_post')
          .select('*')
          .where({ id: req.params.id })
      }
    },
    comments: {
      getAllComments: function (req) {
        req.params.id
        return knex('comment')
          .select('*')
          .where({ blog_id: req.params.id })
      }
    }
  },
  post: {
    makeBlogPost: function (req , res) {
      return knex('blog_post')
        .insert([{
          author: req.body.author,
          title: req.body.title,
          body: req.body.body,
          creation_time: new Date(),
          website_id: 1
        }])
        .then((posting) => {
          let blogBody = req.body.body;
          return knex('blog_post')
            .select('id')
            .where({body: blogBody})
        })
    },
    makeCommentPost: function(req, res) {
      return knex('comment')
        .insert([{
          body: req.body.body,
          author_name: req.body.name,
          creation_time: new Date(),
          blog_id: req.body.blog_id
        }])
    }
  },
  patch: {
    makeBlogPatch: function (req) {
      return knex('blog_post')
        .select('*')
        .where({id: req.body.id})
        .update({
          title: req.body.title,
          author: req.body.author,
          body: req.body.body
        })
    },
    makeCommentPatch: function (req) {
      return knex('comment')
        .select('*')
        .where({id: req.body.id})
        .update({
          author: req.body.author_name,
          body: req.body.body
        })
    }
  },
  delete: {
    makeBlogDelete: function (req) {
      return knex('blog_post')
        .where({id: req.params.id})
        .del()
    },
    makeCommentDelete: function (req) {
      return knex('comment')
        .where({id: req.params.id})
        .del()
    }
  }
}
