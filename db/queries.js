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
        return knex('comment')
          .select('*')
          .where({ blog_id: req.params.id })
      }
    }
  }
}
