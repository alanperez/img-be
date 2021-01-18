const bcrypt = require("bcrypt");
exports.seed = function(knex) {
  // Deletes ALL existing entries
  return knex('users').del()
    .then(function () {
      // Inserts seed entries
      return knex('users').insert([
        {id: 1, username: 'max', password: bcrypt.hashSync('test1234',8)},
        {id: 2, username: 'jack', password: bcrypt.hashSync('test1234',8)},
        {id: 3, username: 'rick', password: bcrypt.hashSync('test1234',8)},
        {id: 4, username: 'tony', password: bcrypt.hashSync('test1234',8)},
        {id: 5, username: 'blake', password: bcrypt.hashSync('test1234',8)},
        {id: 6, username: 'lenny', password: bcrypt.hashSync('test1234',8)}
      ]);
    });
};
