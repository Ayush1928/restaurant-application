const jwt = require("jsonwebtoken");

const verifyToken = (req, res, next) => {
  const authHeader = req.headers.authorization;
  if (authHeader) {
    const token = authHeader.split(" ")[1];
    jwt.verify(token, process.env.SECRET_JWT, (err, user) => {
      if (err) res.status(403).json("Token is not valid.");
      req.user = user;
      next();
    });
  } else {
    res.status(401).json("You are not authenticated.");
  }
};

const verifyTokenandAuth = (req, res, next) => {
  verifyToken(req, res, () => {
    if (req.user.id === req.params.id || req.user.isAdmin) {
      next();
    } else {
      res.status(403).json("Permission Declined.");
    }
  });
};

const verifyTokenandAdmin = (req, res, next) => {
  verifyToken(req, res, () => {
    if (req.user.isAdmin) {
      next();
    } else {
      res.status(403).json("Permission Declined.");
    }
  });
};

module.exports = { verifyToken, verifyTokenandAuth, verifyTokenandAdmin };