import Users from './userModel'

// Retrieves all Users ( username & id)
async function retrieveUsers(req,res) {
    Users.findAll()
    .then((users) => {
        res.status(200).json(users);
    })
    .catch((err) => {
        console.log(err);
        res.status(500).json({ message: err.message })
    })
  }
  
module.exports = { retrieveUsers }