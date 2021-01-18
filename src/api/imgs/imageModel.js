
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



module.exports = {
    findBy,
    insertUser,
    lookByID,

}