const Category = require('../models/categoryModel');
const slugify = require('slugify');
const asyncHandler = require('express-async-handler');

//@desc     Create Category
//@route    POST /api/categories/create
//@access   Private/Admin
exports.createCategory = asyncHandler(async (req, res) => {
  const name = req.body.name;
  const slug = slugify(name).toLowerCase();

  const existing = await Category.findOne({ name });

  if (existing) {
    res.status(400);
    throw new Error('Category name should be unique');
  }

  const category = await new Category({ name, slug }).save();
  res.json(category);
});

//@desc     Create Category
//@route    POST /api/categories/create
//@access   Private/Admin
exports.getCategories = asyncHandler(async (req, res) => {
  const categories = await Category.find({});
  res.json({ count: categories.length, categories });
});

//@desc     Delete Category
//@route    POST /api/categories/:slug
//@access   Private/Admin
exports.getCategory = asyncHandler(async (req, res) => {
  const slug = req.params.slug.toLowerCase();
  const category = await Category.findOne({ slug });
  if (!category) {
    res.status(400);
    throw new Error('Category does not exist');
  }
  res.json({ category });
});
//@desc     Delete Category
//@route    POST /api/categories/:slug
//@access   Private/Admin
exports.deleteCategory = asyncHandler(async (req, res) => {
  const slug = req.params.slug.toLowerCase();
  let category = await Category.findOne({ slug });
  if (!category) {
    res.status(400);
    throw new Error('Category does not exist');
  }
  await category.remove();
  res.json({ message: 'Category deleted successfully', data: {} });
});
