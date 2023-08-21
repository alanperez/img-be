const bcrypt = require("bcrypt");
exports.seed = function(knex) {
  // Deletes ALL existing entries
  return knex('users').del()
    .then(function () {
      // Inserts seed entries
      return knex('users').insert([
        { username: 'max', password: bcrypt.hashSync('test1234',8)},
        { username: 'jack', password: bcrypt.hashSync('test1234',8)},
        {username: 'rick', password: bcrypt.hashSync('test1234',8)},
        { username: 'tony', password: bcrypt.hashSync('test1234',8)},
        { username: 'blake', password: bcrypt.hashSync('test1234',8)},
        { username: 'lenny', password: bcrypt.hashSync('test1234',8)}
      ]);
    });
};
