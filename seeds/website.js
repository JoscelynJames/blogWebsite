
exports.seed = function(knex, Promise) {
  return knex('website').del()
    .then(function () {
      return knex('website').insert([
        {id: 1, colName: 'rowValue1'},
      ]);
    });
};
