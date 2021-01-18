const db = require('../../data/dbConig')
const JoinFields = [
    'images.id',
    'images.image_url',
    'images.tag',
    'images.user_id',
    'users.username'
  ];


const findBy = (filter) => {
    return db("users").where(filter);
  }
function getBy(id) {
    return db('images')
      .select(JoinFields)
      .join('users', 'users.id', 'images.user_id')
      .where('images.id', id)
      .first();
  }
function lookByID(user_id) {
    return db('images').where({user_id})
  }

function getAll() {
    return db('images')
      .select(JoinFields)
      .join('users', 'users.id', 'images.user_id');
  }
function remove(id){
    return db('images')
    .where({ id })
    .del();
}

function findUser(id) {
    return db("images")
      .where({ id })
  }

module.exports = {
    findBy,
    lookByID,
    getAll,
    getBy,
    findUser,
    remove

}