const User = require("../models/User")
const jwt = require("jsonwebtoken");

const tokenExtractor = (request, response, next) => {
  const authorization = request.get("authorization");
  request.token = null;
  if (authorization && authorization.startsWith("Bearer ")) {
    request.token = authorization.replace("Bearer ", "");
  }
  next();
};

const userExtractor = async (request, response, next) => {
  request.decoded_token = jwt.verify(request.token, process.env.SECRET);
  request.user = await User.findById(request.decoded_token.id);
  next();
};

module.exports = { tokenExtractor, userExtractor };
