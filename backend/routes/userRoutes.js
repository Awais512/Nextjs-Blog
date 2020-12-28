const express = require('express');
const router = express.Router();
const { requireSignin } = require('../controllers/authController');
const { getUser } = require('../controllers/userController');
const { authenticated, isAdmin } = require('../middlewares/authMiddleware');

router.get('/profile', requireSignin, authenticated, isAdmin, getUser);

module.exports = router;
