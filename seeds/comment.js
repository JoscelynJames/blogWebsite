
exports.seed = function(knex, Promise) {
  return knex('comment').del()
    .then(function () {
      return knex('comment').insert([
        {
          body: 'Im Angry',
          author_name: 'Ann Frank',
          creation_time: new Date(),
          // blog_id: 1,
        },
        {
          body: 'I like turtles',
          author_name: 'Ann Frank',
          creation_time: new Date(),
          // blog_id: 1,
        },
        {
          body: 'Im Happy',
          author_name: 'Susan Susan',
          creation_time: new Date(),
          // blog_id: 2,
        },
        {
          body: 'America',
          author_name: 'Ron Swanson',
          creation_time: new Date(),
          // blog_id: 2,
        },
        {
          body: 'Im vegan',
          author_name: 'Derp Derp',
          creation_time: new Date(),
          // blog_id: 3,
        },
        {
          body: 'Lifes ok right now...',
          author_name: 'Craig Hammilton',
          creation_time: new Date(),
          // blog_id: 3,
        },
        {
          body: 'Pooptarts',
          author_name: 'Marge Burns',
          creation_time: new Date(),
          // blog_id: 3,
        },
      ]);
    });
};
