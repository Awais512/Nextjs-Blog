const User = require('../models/userModel');
const asyncHandler = require('express-async-handler');
const shortId = require('shortid');

//@desc     Login User
//@route    POST /api/auth/login
//@access   Public
exports.login = asyncHandler(async (req, res) => {
  res.json({ msg: 'Login route' });
});

//@desc     Register User
//@route    POST /api/auth/register
//@access   Public
exports.register = asyncHandler(async (req, res) => {
  const { name, email, password } = req.body;
  let username = shortId.generate();
  let profile = `${process.env.CLIENT_URL}/profile/${username}`;

  const userExist = await User.findOne({ email });
  if (userExist) {
    res.status(400);
    throw new Error('User already Exist');
  }
  const user = await User.create({ name, email, password, profile, username });
  if (user) {
    res.status(201).json({
      _id: user._id,
      role: user.role,
      username: user.username,
      name: user.name,
      email: user.email,
      profile: user.profile,
    });
  } else {
    res.status(400);
    throw new Error('Invalid User Data');
  }
});
