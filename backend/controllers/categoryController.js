const Category = require('../models/categoryModel');
const slugify = require('slugify');
const asyncHandler = require('express-async-handler');

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
