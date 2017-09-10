
exports.seed = function(knex, Promise) {
  return knex('comment').del()
    .then(function () {
      return knex('comment').insert([
        {
          id: 1,
          body: 'Im Angry',
          author_name: 'Ann Frank',
          creation_time: new Date(),
          blog_id: 1,
        },
        {
          id: 2,
          body: 'I like turtles',
          author_name: 'Ann Frank',
          creation_time: new Date(),
          blog_id: 1,
        },
        {
          id: 3,
          body: 'Im Happy',
          author_name: 'Susan Susan',
          creation_time: new Date(),
          blog_id: 2,
        },
        {
          id: 4,
          body: 'America',
          author_name: 'Ron Swanson',
          creation_time: new Date(),
          blog_id: 2,
        },
        {
          id: 5,
          body: 'Im vegan',
          author_name: 'Derp Derp',
          creation_time: new Date(),
          blog_id: 3,
        },
        {
          id: 6,
          body: 'Lifes ok right now...',
          author_name: 'Craig Hammilton',
          creation_time: new Date(),
          blog_id: 3,
        },
        {
          id: 7,
          body: 'Pooptarts',
          author_name: 'Marge Burns',
          creation_time: new Date(),
          blog_id: 3,
        },
      ]);
    });
};
