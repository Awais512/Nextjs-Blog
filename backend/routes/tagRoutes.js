const express = require('express');
const router = express.Router();
const { requireSignin } = require('../controllers/authController');
const {
  createTag,
  getTags,
  getTag,
  deleteTag,
} = require('../controllers/tagController');
const { authenticated, isAdmin } = require('../middlewares/authMiddleware');

router.post('/create', requireSignin, isAdmin, createTag);
router.get('/', getTags);
router.get('/:slug', getTag);
router.delete('/:slug', requireSignin, isAdmin, deleteTag);

module.exports = router;
