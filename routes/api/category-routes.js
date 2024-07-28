const router = require('express').Router();
const { where } = require('sequelize');
const { Category, Product, Tag } = require('../../models');
const {verifyCategoryBody}= require('./middleware')


// The `/api/categories` endpoint

router.get('/', async(req, res) => {

  try{
      // find all categories
  // be sure to include its associated Products

  const result = await Category.findAll(
    {
      include:[{model:Product}]
    })

    res.json(result);
    // console.log(result);

  }
  catch(error){
    res.json(error);
  }


});


router.get('/:id', async(req, res) => {

  try{
      // find one category by its `id` value
  // be sure to include its associated Products
const result = await Category.findByPk(req.params.id, 
  {include:[{model:Product}]
})

res.json(result);

  }
  catch(error){
    res.json(error);
  }


});

router.post('/',verifyCategoryBody, async(req, res) => {
  try{
      // create a new category
      const result = await Category.create(req.body);
      res.json(result);

  }
  catch(error){
    res.json(error);
  }

  
});

router.put('/:id', verifyCategoryBody, async(req, res) => {

  try{
     // update a category by its `id` value
  const result = await Category.update(req.body,{

    where:{
      id:req.params.id
    }
  })

  res.json(result);

  }
  catch(error){

    res.json(error);
    
  }
 
});

router.delete('/:id', async(req, res) => {

  try{
      // delete a category by its `id` value
  const result = await Category.destroy({

    where:{
      id:req.params.id
    }
  })

  res.json({message:'Category successfully deleted'});

  }
  catch(error){
    res.json(error);
  }

});

module.exports = router;
