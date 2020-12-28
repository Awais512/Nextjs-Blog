const express = require('express');
const router = express.Router();
const { requireSignin } = require('../controllers/authController');
const {
  createCategory,
  getCategories,
  getCategory,
  deleteCategory,
} = require('../controllers/categoryController');
const { authenticated, isAdmin } = require('../middlewares/authMiddleware');

router.post('/create', requireSignin, isAdmin, createCategory);
router.get('/', getCategories);
router.get('/:slug', getCategory);
router.delete('/:slug', requireSignin, isAdmin, deleteCategory);

module.exports = router;
