const express = require('express');
const router = express.Router();
const { requireSignin } = require('../controllers/authController');
const { createCategory } = require('../controllers/categoryController');
const { authenticated, isAdmin } = require('../middlewares/authMiddleware');

router.post('/create', requireSignin, isAdmin, createCategory);

module.exports = router;
