import mongoose from "mongoose";

//Documento aninhado

const descriptionSchema = new mongoose.Schema({
  genre: String,
  platform: String,
  rating: String
})

const gamesSchema = new mongoose.Schema({
  title: String,
  year: Number,
  price: Number,
  descriptions: [descriptionSchema]
});

//Aqui está sendo criado a coleção Games no Banco de Dados
const Game = mongoose.model("Game", gamesSchema);

export default Game;
