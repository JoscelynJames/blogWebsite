
exports.up = function (knex, Promise) {
  return knex.schema.createTable('website', function (table) {
    table.increments('id')
  })
}

exports.down = function (knex, Promise) {
  return knex.schema.dropTableIfExists('website')
}
