const Tag = require('../models/tagModel');
const slugify = require('slugify');
const asyncHandler = require('express-async-handler');

//@desc     Create Tag
//@route    POST /api/tags/create
//@access   Private/Admin
exports.createTag = asyncHandler(async (req, res) => {
  const name = req.body.name;
  const slug = slugify(name).toLowerCase();

  const existing = await Tag.findOne({ name });

  if (existing) {
    res.status(400);
    throw new Error('Tag name should be unique');
  }

  const tag = await new Tag({ name, slug }).save();
  res.json(tag);
});

//@desc     Get all Tags
//@route    POST /api/tags/create
//@access   Private/Admin
exports.getTags = asyncHandler(async (req, res) => {
  const tags = await Tag.find({});
  res.json({ count: tags.length, tags });
});

//@desc     Delete Tag
//@route    POST /api/tags/:slug
//@access   Private/Admin
exports.getTag = asyncHandler(async (req, res) => {
  const slug = req.params.slug.toLowerCase();
  const tag = await Tag.findOne({ slug });
  if (!tag) {
    res.status(400);
    throw new Error('Tag does not exist');
  }
  res.json({ tag });
});
//@desc     Delete Tag
//@route    POST /api/tags/:slug
//@access   Private/Admin
exports.deleteTag = asyncHandler(async (req, res) => {
  const slug = req.params.slug.toLowerCase();
  let tag = await Tag.findOne({ slug });
  if (!tag) {
    res.status(400);
    throw new Error('Tag does not exist');
  }
  await tag.remove();
  res.json({ message: 'Tag deleted successfully', data: {} });
});
