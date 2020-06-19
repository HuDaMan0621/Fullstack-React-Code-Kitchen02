var express = require('express');
var router = express.Router();
const db = require('../models'); // we need to require the models folder in order to access all the models
// const { json } = require('sequelize/types');
/* GET home page. */
router.get('/recipes', function (req, res, next) {
  db.Recipes.findAll({
    include: [{
      model: db.Categories,
      through: {
        attributes: []
      }
    }],

    
    // include: [db.Categories],
    // attributes: {
    //   exclude:['likes'] //exclude likes 
    // }
  })
    .then(data => {
      res.json(data);
      // const newData = { ...data, categories: data.Categories}; //we can do it like so, call newData, 
      // delete newData.Categories;  //then delete the new data.categories. we remove the data,
      // res.json(newData); //and we return the new data here , but we need to do it in to each individual item in the array
    })    
});

router.get('/recipes/:id', (req, res) => {
  db.Recipes.findByPk(req.params.id, {
    include: [{
      model: db.Categories,
      through: {
        attributes: []
      }
    }]
  })
  .then(data => {
    res.json(data);
  })
})

router.post('/recipes', (req, res) => {
  const { name, review, description, url, likes, vegetarian, vegan, glutenfree } = req.body  //de const

  if(!name) { res.status(400).json({ error: "name field is required" }) }
  if(!review) { res.status(400).json({ error: "review field is required" }) }
  if(!url) { res.status(400).json({ error: "url field is required" }) }

  db.Recipes.create({
    name: name,
    review: review,
    description: description || '',
    url: url,
    likes: likes || 0,
    vegetarian: vegetarian || false,
    vegan: vegan || false,
    glutenfree: glutenfree || false,
  })
  .then(recipe => {
    res.status(201).json(recipe);
  })
})

module.exports = router;
