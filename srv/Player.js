let mongoose = require('mongoose')

// Define collection and schema for player
let playerSchema = new mongoose.Schema({
  id: String,
  money: Number,
  goodDirt: Number,
  upgrades: {
    name: String,
    available: Boolean,
    owned: Boolean,
    count: Number
  }
},
{
  collection: 'players'
});

module.exports = mongoose.model('Player', playerSchema);
