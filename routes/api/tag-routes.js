const router = require('express').Router();
const { Tag, Product, ProductTag } = require('../../models');
const { update } = require('../../models/Product');

// The `/api/tags` endpoint

router.get('/', async (req, res) => {
  // find all tags
  // be sure to include its associated Product data
  let tagData = await Tag.findAll().catch((err) => {
    res.json(err);
  });
  res.json(tagData);
});

router.get('/:id', async (req, res) => {
  // find a single tag by its `id`
  // be sure to include its associated Product data
  let singleTagData = await Tag.findByPk(req.params.id).catch((err) => {
    res.json(err);
  });
  res.json(singleTagData);
});

router.post('/', async (req, res) => {
  // create a new tag
  let newTag = await Tag.create(req.body).catch((err) => {
    res.json(err);
  })
  res.json(newTag);
});

router.put('/:id', async (req, res) => {
  // update a tag's name by its `id` value
  let updatedData = await Tag.update(req.body, {
    where: {
      id: req.params.id,
    }
  });
  res.json(updatedData);
});

router.delete('/:id', async (req, res) => {
  // delete on tag by its `id` value
  let numberOfDeletedEntries = await Tag.destroy({
    where: {
      id: req.params.id,
    }
  });
  res.json(numberOfDeletedEntries);
});

module.exports = router;
