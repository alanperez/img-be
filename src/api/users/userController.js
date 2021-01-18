const generateToken = require('../auth/generateToken')
const Users = require('./userModel')
const Images = require('../imgs/imageModel')
const bcrypt = require('bcrypt')



async function registerUser(req,res) {
    try {
        const { username, password } = req.body;
        const rounds = 8;
        if (username && password) {
          const salt = bcrypt.genSaltSync(parseInt(rounds));
          const hash = bcrypt.hashSync(password, salt);
          const user = {
            username,
            password: hash
          };
          console.log(user);
          const createdUser = await Users.insertUser(user);
          const token = await generateToken(createdUser.username)
          res.status(201).json({...createdUser, token});
        } else {
          res.status(409).json({ error: 'unrecognized fields' });
        }
      } catch (err) {
        console.error(err);
        res.status(500).json({ error: 'something went wrong' });
      }
}

async function loginUser(req,res) {
    let { username, password } = req.body;
    Users.findBy({ username })
      .first()
      .then(user => {
        if (user && bcrypt.compareSync(password, user.password)){
          const token = generateToken(user);
          res.status(200).json({
            token,
            message: `Welcome ${user.username}!`,
            id: user.id
          })
        } else {
          res.status(401).json({message: 'Invalid Credentials'})
        }
      })
      .catch(error => {
        res.status(500).json(error);
      });
}


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
  
  async function userViewOwnImages(req,res) {
    const username = req.decoded.username
    Images.lookByID(req.decoded.id)
    // console.log('clg req params iddd', req.params.id)
    .then(image => {
      // console.log('clg da img.d', image)
      res.status(200).json(image);
    })
    .catch(err => {
      console.error(err);
      res.status(500).json({
        message: "There was an error while retreiving the parent's children. Please try again later."
      })
    })
  }
module.exports = { loginUser,registerUser,retrieveUsers, userViewOwnImages }