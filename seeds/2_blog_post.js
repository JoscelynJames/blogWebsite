
exports.seed = function(knex, Promise) {
  return knex('blog_post').del()
    .then(function () {
      return knex('blog_post').insert([
        {
          id: 1,
          title: "Wearing Socks with Sandals",
          body: "First test",
          author: "Mary Beth",
          creation_time: new Date(),
          website_id: 1,
        },
        {
          id: 2,
          title: "Is there such a thing as too high of pants?",
          body: "Second test",
          author: "Mary Beth jr",
          creation_time: new Date(),
          website_id: 1,
        },
        {
          id: 3,
          title: "Creepy Rape Glasses from the 80's",
          body: "Third test",
          author: "Mary Beth sr",
          creation_time: new Date(),
          website_id: 1,
        },
      ]);
    });
};
