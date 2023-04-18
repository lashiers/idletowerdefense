const mongoose = require('mongoose')

const waveSchema = new mongoose.Schema({
  _id: { type: String },
  composition: { type: String },
  wave_strength: { type: Number },
  times_defeated: { type: Number, default: 0 }
})

module.exports = mongoose.model('Wave', waveSchema)