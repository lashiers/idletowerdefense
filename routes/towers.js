const express = require('express');
const router = express.Router();
const Tower = require('../models/tower');


// all Towers Router
router.get('/', async (req, res) => {
  let searchOptions = {}
  if (req.query._id != null && req.query._id !== '') {
    searchOptions._id = new RegExp(req.query._id, 'i')
  }
  try {
    const towers = await Tower.find(searchOptions)
    res.render('towers/index', {
      towers: towers,
      searchOptions: req.query
    })
  } catch {
    res.redirect('/')
  }
})

// New Tower Route
router.get('/new', (req, res) => {
  res.render('towers/new', { tower: new Tower() })
})

// Create Tower Route
router.post('/', async (req, res) => {
  const tower = new Tower({
    _id: req.body._id,
    composition: req.body.composition,
    min_range: req.body.min_range,
    max_range: req.body.max_range,
    lead_amount: req.body.lead_amount,
    base_cost: req.body.base_cost,
    target_fliers: req.body.target_fliers,
  })
  try {
    const newTower = await tower.save()
    // res.redirect(`authors/${newAuthor.id}`)
    res.redirect(`towers`)
  } catch {
    res.render('towers/new', {
      tower: tower,
      errorMessage: 'Error creating Tower'
    })
  }
})

module.exports = router