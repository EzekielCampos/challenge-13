const router = require('express').Router();
const { Tag, Product, ProductTag } = require('../../models');

// The `/api/tags` endpoint

router.get('/', async(req, res) => {
  // find all tags
  // be sure to include its associated Product data
const result = await Tag.findAll({
  include:[Product]
});

res.json(result);
  


});

router.get('/:id', async (req, res) => {
  // find a single tag by its `id`
  // be sure to include its associated Product data
  const result = await Tag.findByPk(req.params.id,{

    include:[Product]
    
  })
  res.json(result);
});

router.post('/', async(req, res) => {
  // create a new tag
const result = await Tag.create(req.body);

res.json(result);


});

router.put('/:id', async(req, res) => {
  // update a tag's name by its `id` value
const result = await Tag.update(req.body,{

where:{
  id:req.params.id
}

})

res.json(result);

});

router.delete('/:id', async (req, res) => {
  // delete on tag by its `id` value

  const result = await Tag.destroy({

    where:{
      id:req.params.id
    }
  })

  res.json("sucess");
});

module.exports = router;
