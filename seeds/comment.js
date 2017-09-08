
exports.seed = function(knex, Promise) {
  return knex('comment').del()
    .then(function () {
      return knex('comment').insert([
        {id: 1, colName: 'rowValue1'},
      ]);
    });
};
