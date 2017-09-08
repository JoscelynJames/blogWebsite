
exports.up = function(knex, Promise) {
  return knex.schema.createTable('blog_post', function(table) {
    table.increments('id')
    table.varchar('title')
    table.varchar('author')
    table.text('body')
    table.timestamp('creation_time')
    table.integer('website_id')
    .references('website.id')
    .onDelete('CASCADE')
  })
};

exports.down = function(knex, Promise) {
  return knex.schema.dropTableIfExists('blog_post')
};
