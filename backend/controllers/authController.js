const User = require('../models/userModel');
const asyncHandler = require('express-async-handler');
const shortId = require('shortid');
const jwt = require('jsonwebtoken');
const expressJwt = require('express-jwt');

//@desc     Login User
//@route    POST /api/auth/login
//@access   Public
exports.login = asyncHandler(async (req, res) => {
  const { email, password } = req.body;
  const user = await User.findOne({ email });
  if (!user) {
    res.status(400);
    throw new Error('User does bot Exist... Please Sign up');
  }
  if (!user.authenticate(password)) {
    res.status(400);
    throw new Error('Email and Password do not match');
  }

  const token = jwt.sign({ _id: user._id }, process.env.JWT_SECRET, {
    expiresIn: '7d',
  });

  res.cookie('token', token, { expiresIn: '7d' });

  user.hashed_password = undefined;
  user.salt = undefined;

  res.json({ token, user });
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

exports.signout = asyncHandler(async (req, res) => {
  res.clearCookie('token');
  res.json({
    message: 'Signed Out Successfully',
  });
});

exports.requireSignin = expressJwt({
  secret: process.env.JWT_SECRET,
  algorithms: ['sha1', 'RS256', 'HS256'],
});
