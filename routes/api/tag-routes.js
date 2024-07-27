const router = require('express').Router();
const { Tag, Product, ProductTag } = require('../../models');

const {verifyTagBody} = require('./middleware')

// The `/api/tags` endpoint

router.get('/', async(req, res) => {

  try{
      // find all tags
  // be sure to include its associated Product data
const result = await Tag.findAll({
  include:[Product]
});

res.json(result);

  }
  catch(error){
    res.json(error);
  }


});

router.get('/:id', async (req, res) => {

  try{
      // find a single tag by its `id`
  // be sure to include its associated Product data
  const result = await Tag.findByPk(req.params.id,{

    include:[Product]
    
  })
  res.json(result);

  }
  catch(error){
    res.json(error)
  }

});

router.post('/',verifyTagBody, async(req, res) => {

  try{

  // create a new tag
const result = await Tag.create(req.body);

res.json(result);

  }catch(error){
    res.json(error)
  }


});

router.put('/:id', verifyTagBody, async(req, res) => {
  try{
      // update a tag's name by its `id` value
const result = await Tag.update(req.body,{
  where:{
    id:req.params.id
  }
})
res.json(result);

  }
  catch(error){
    res.json(error)
  }
  
});

router.delete('/:id', async (req, res) => {

  try{

      // delete on tag by its `id` value
  const result = await Tag.destroy({

    where:{
      id:req.params.id
    }
  })

  res.json({message:'Tag successfully deleted'});

  }
  catch(error){
    res.json(error);
  }

});

module.exports = router;


