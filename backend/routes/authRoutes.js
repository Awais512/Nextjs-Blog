const express = require('express');
const router = express.Router();
const {
  login,
  register,
  signout,
  requireSignin,
} = require('../controllers/authController');

router.post('/login', login);
router.post('/register', register);
router.get('/signout', signout);

module.exports = router;
