
exports.seed = function(knex, Promise) {
  return knex('blog_post').del()
    .then(function () {
      return knex('blo_post').insert([
        {id: 1, colName: 'rowValue1'},
      ]);
    });
};
