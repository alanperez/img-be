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
const insertUser = async (user) => {
    const [id] = await db('users').insert(user, 'id');
    return getById(id)
}
function lookByID(user_id) {
    return db('images').where({user_id})
  }

function getAll() {
    return db('images')
      .select(JoinFields)
      .join('users', 'users.id', 'images.user_id');
  }

module.exports = {
    findBy,
    insertUser,
    lookByID,
    getAll

}