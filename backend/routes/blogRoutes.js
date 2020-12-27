const express = require('express');
const router = express.Router();
const { createBlog } = require('../controllers/blogController');

router.route('/', createBlog);

module.exports = router;
