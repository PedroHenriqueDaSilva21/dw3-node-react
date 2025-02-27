import express from "express";
import mongoose from "mongoose";
import Game from "./models/Games.js";
//Importando os Endpoint de Games
import gameRoutes from "./routes/gameRoutes.js";

const app = express();

// Configurações do Express

app.use(express.urlencoded({ extended: false }));
app.use(express.json());
app.use('/',gameRoutes)

//Iniciando a conexão com o Banco de Dados do MongoDB
mongoose.connect("mongodb://127.0.0.1:27017/api-thegames");

// Rota Principal

app.get("/", (req, res) => {
  //  res.send("API Iniciada com Sucesso");
  const games = [
    {
      title: "Game 1",
      year: "2020",
      platform: "PC",
      price: "20",
    },
    {
      title: "Game 2",
      year: 2020,
      platform: "Playstation 5",
      price: 200,
    },
  ];
  res.json(games);
});

//Iniciando o Servidor

const port = 4000;

app.listen(port, (error) => {
  if (error) {
    console.log(error);
  } else {
    console.log(`API Rodando: http://localhost:${port}`);
  }
});
