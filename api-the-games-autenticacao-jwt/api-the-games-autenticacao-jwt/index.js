import express from "express";
import mongoose from "mongoose";
import Games from "./models/Games.js"
import User from "./models/Users.js";
import dotenv from "dotenv";
dotenv.config();
const app = express();



// Importando as rotas (endpoints) de Games
import gameRoutes from './routes/gameRoutes.js'
import userRoutes from "./routes/userRoutes.js";

// Configurações do Express
app.use(express.urlencoded({ extended: false }));
app.use(express.json());
app.use('/', gameRoutes)
app.use('/',userRoutes)

// Iniciando a conexão com o banco de dados do MongoDB
//mongoose.connect("mongodb://127.0.0.1:27017/api-thegames")

//Variáveis de Ambiente para acesso ao MongoDB Atlas
const user = process.env.user
const password = process.env.password

mongoose.connect(`mongodb+srv://${process.env.password}:${process.env.password}@clustermotorteste.fmlpihp.mongodb.net/?retryWrites=true&w=majority&appName=ClusterMotorTeste`)

// Iniciando o servidor
const port = 4000;
app.listen(port, (error) => {
  if (error) {
    console.log(error);
  } else {
    console.log(`API rodando em http://localhost:${port}.`);
  }
});
