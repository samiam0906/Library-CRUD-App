
exports.seed = function(knex, Promise) {
  // Deletes ALL existing entries
  return knex('books').del()
    .then(function () {
      // Inserts seed entries
      return knex('books').insert([
        {
          author: 'George RR Martin',
          title: 'Game of Thrones',
          rating: 10,
          description: 'Fantasy'
        }
      ]);
    });
};
