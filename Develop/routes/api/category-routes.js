const router = require('express').Router();
const { Category, Product, ProductTag, Tag } = require('../../models');

// The `/api/categories` endpoint

  // find all categories
  // be sure to include its associated Products
  router.get('/', async (req, res) => {
    try {
      const categoriesData = await Category.findAll({  
        include: [
          {model : Product}]
          });
      if(categoriesData.length === 0) console.log("No categories saved")
      res.status(200).json(categoriesData);
    } catch (err) {
      res.status(500).json(err);
    }
  });


  // find one category by its `id` value
  // be sure to include its associated Products
  router.get('/:id', async (req, res) => {
    try {
      const categoriesData = await Category.findOne(
        {where: {id: req.params.id}, 
        include:[{ model: Product,},],
      });
  
      if (!categoriesData) {
        res.status(404).json({ message: 'No category is found' });
        return;
      }
  
      res.status(200).json(categoriesData);
    } catch (err) {
      res.status(500).json(err);
    }
  });


  // create a new category
  router.post('/', async (req, res) => {
    try {
      const newCategory = await Category.create(req.body);
      res.status(200).json(newCategory);
    } catch (err) {
      res.status(400).json(err);
    }
  });
  

 // update a category by its `id` value
router.put('/:id', async (req, res) => { 
  try {
    const newCategory = await Category.update(req.body, {
      where: {
        id: req.params.id,
      },
    });
    if (!newCategory[0]) {
      res.status(404).json({ message: 'No category with this id!' });
      return;
    }
    res.status(200).json(newCategory);
  } catch (err) {
    res.status(500).json(err);
  }
});

// delete a category by its `id` value
router.delete('/:id', async (req, res) => {
  try {
    const newCategory = await Category.destroy({
      where: {
        id: req.params.id,
      },
    });
    if (!newCategory) {
      res.status(404).json({ message: 'No category with this id!' });
      return;
    }
    res.status(200).json(newCategory);
  } catch (err) {
    res.status(500).json(err);
  }
});

module.exports = router;
