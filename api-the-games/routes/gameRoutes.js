import express from "express";
import gameController from "../controllers/gameController.js";

const gameRoutes = express.Router();

//Endpoint para listar todos os games
gameRoutes.get("/games",gameController.getAllGames);
gameRoutes.post("/games",gameController.createGame)
gameRoutes.delete("/games/:id",gameController.deleteGame);

export default gameRoutes;


