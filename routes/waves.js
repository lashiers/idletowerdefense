const express = require('express');
const router = express.Router();
const Wave = require('../models/wave');

// all Waves Router
router.get('/', async (req, res) => {
  let searchOptions = {}
  if (req.query._id != null && req.query._id !== '') {
    searchOptions._id = new RegExp(req.query._id, 'i')
  }
  try {
    const waves = await Wave.find(searchOptions)
    res.render('waves/index', {
      waves: waves,
      searchOptions: req.query
    })
  } catch {
    res.redirect('/')
  }
})

// New Wave Route
router.get('/new', (req, res) => {
  res.render('waves/new', { wave: new Wave() })
})

// Create Wave Route
router.post('/', async (req, res) => {
  const wave = new Wave({
    _id: req.body._id,
    composition: req.body.composition,
    wave_strength: req.body.wave_strength,
  })
  try {
    const newWave = await wave.save()
    // res.redirect(`authors/${newAuthor.id}`)
    res.redirect(`waves`)
  } catch {
    res.render('waves/new', {
      wave: wave,
      errorMessage: 'Error creating Wave'
    })
  }
})

module.exports = router