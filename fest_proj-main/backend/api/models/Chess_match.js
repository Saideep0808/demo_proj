const mongoose = require("mongoose");

const playerSchema = new mongoose.Schema({
  player_name: String,
  roll_no: Number,
  year: Number,
  team_status: String,
});

const scoreSchema = new mongoose.Schema({
  teams: String,
  round1: Number,
  round2: Number,
  round3: Number,
});

const matchSchema = new mongoose.Schema({
  name: String,
  status: String,
  scores: [scoreSchema],
  players: [playerSchema], // Change from 'teamPlayers' to 'players'
});

const Chess_match = mongoose.model("Chess_match", matchSchema);

module.exports = Chess_match;
