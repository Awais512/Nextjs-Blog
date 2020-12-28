const User = require('../models/userModel');
const asyncHandler = require('express-async-handler');

exports.authenticated = asyncHandler(async (req, res, next) => {
  const userId = req.user._id;
  const user = await User.findById({ _id: userId });
  if (!user) {
    res.status(400);
    throw new Error('User with this email does not exist');
  }
  req.profile = user;
  next();
});

exports.isAdmin = asyncHandler(async (req, res, next) => {
  const userId = req.user._id;
  const user = await User.findById({ _id: userId });
  if (!user) {
    res.status(400);
    throw new Error('User with this email does not exist');
  }
  if (user.role !== 1) {
    res.status(400);
    throw new Error('You are not allow to access this route');
  }
  req.profile = user;
  next();
});
