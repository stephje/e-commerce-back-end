const router = require('express').Router();
const { Category, Product } = require('../../models');

// The `/api/categories` endpoint

router.get('/', async (req, res) => {
  // find all categories
  // be sure to include its associated Products
  const categoryData = await Category.findAll().catch((err) => {
    res.json(err);
  });
  res.json(categoryData);
});

router.get('/:id', async (req, res) => {
  // find one category by its `id` value
  // be sure to include its associated Products
  const singleTagData = await Category.findByPk(req.params.id).catch((err) => {
    res.json(err);
  });
  res.json(singleTagData);
});

router.post('/', async (req, res) => {
  // create a new category
  let newCategory = await Category.create(req.body).catch((err) => {
    res.json(err);
  })
  res.json(newCategory); 
});

router.put('/:id', async (req, res) => {
  // update a category by its `id` value
  let updatedData = await Category.update(req.body, {
    where: {
      id: req.params.id,
    },
  });
  res.json(updatedData);
});

router.delete('/:id', async (req, res) => {
  // delete a category by its `id` value
  let numberOfDeletedEntries = await Category.destroy({
    where: {
      id: req.params.id,
    }
  });
  res.json(numberOfDeletedEntries);
});

module.exports = router;
