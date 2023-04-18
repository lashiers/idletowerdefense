const mongoose = require('mongoose')

const towerSchema = new mongoose.Schema({
  _id: { type: String },
  composition: { type: String },
  min_range: { type: Number },
  max_range: { type: Number },
  lead_amount: { type: Number },
  times_deployed: { type: Number, default: 0 },
  times_sold: { type: Number, default: 0 },
  base_cost: { type: Number },
  target_fliers: { type: String },
})

module.exports = mongoose.model('Tower', towerSchema)
