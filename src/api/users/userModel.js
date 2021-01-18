const db = require('../../data/dbConig')

const findBy = (filter) => {
    return db("users").where(filter);
  }

const findAll = async () => {
    return await db('users').select('username','id')
}
const getById = async (id) => {
    return await db('users').where({ id }).first();
}

const insertUser = async (user) => {
    const [id] = await db('users').insert(user, 'id');
    return getById(id)
}
module.exports = { 
    findBy,
    findAll,
    insertUser,
    getById

}