
  const findAll = async () => {
    return await db('users').select('username','id')
}

module.exports = { 
    findAll,

}