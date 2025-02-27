import mongoose from "mongoose";

const gamesSchema = new mongoose.Schema({
  title: String,
  platform: String,
  year: Number,
  price: Number,
});

//Aqui está sendo criado a coleção Games no Banco de Dados
const Game = mongoose.model("Game", gamesSchema);

export default Game;
