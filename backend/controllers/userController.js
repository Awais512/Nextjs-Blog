const User = require('../models/userModel');
const asyncHandler = require('express-async-handler');

exports.getUser = asyncHandler(async (req, res) => {
  req.profile.hashed_password = undefined;
  return res.json(req.profile);
});
