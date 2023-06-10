const jwt = require("jsonwebtoken");
const secret = require("./auth.config").secret;

module.exports = (user) => {
  const payload = {
    id: user.id,
    username: user.username
  };
  const options = {
    expiresIn: '1d'
  };
  return jwt.sign(payload, secret, options);
};