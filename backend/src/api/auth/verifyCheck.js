const Images = require('../imgs/imageModel')
const Users = require('../users/userModel')
async function verifyImageOwner(
    { params: { imgid }, decoded: { id } },
    res,
    next
  ) {
    try {
      const { imageOwnerID } = await Images.findImageByUser(imgid);
      imageOwnerID === id
        ? next()
        : res.status(400).json({ message: "You don't own that image" });
    } catch (err) {
      res.status(400).json({ message: "No Image Found By That ID" });
    }
  }

  async function verifyImgUser() {
    return (req, res, next) => {
      Users.getById(req.params.id)
        .then(user => {
          console.log('CLG THE USER', user.id)
          if (user) {
            req.user = user;
            next();
          } else {
            res.status(400).json({
              message: "Invalid Parent Id."
            })
          }
        })
        .catch(err => {
          res.status(500).json({
            message: "There was an error while trying to find the parent. Please try again later."
          })
        })
    }
  }

  module.exports = {

    verifyImageOwner,
    verifyImgUser
  }