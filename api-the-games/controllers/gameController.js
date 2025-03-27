import gameService from "../services/gameService.js";
import { ObjectId } from "mongodb";

// Função de Listagem dos Jogos
const getAllGames = async (req, res) => {
  try {
    const games = await gameService.getAll();
    //Requisição feita com Sucesso
    res.status(200).json({ games: games });
  } catch (error) {
    console.log(error);
    res.status(500).json({ error: "Internal Server Error:" });
  }
};

// Função para o Cadastro de jogos

const createGame = async (req, res) => {
  try {
    const title = req.body.title;
    const year = req.body.year;
    const price = req.body.price;
    const descriptions = req.body.descriptions

    //Capturando valores através da desustruração
    // const { title, platform, year, price} = req.body
    //Cadastrando no Banco de Dados
    await gameService.Create(title, year, price, descriptions);
    res.status(201).json({ message: "Recurso criado com sucesso" }); //Recurso criado com sucesso
  } catch (err) {
    console.log(err);
    res.status(500).json({ error: "Erro interno do servidor" });
  }
};

//Função para Deletar Jogos

const deleteGame = async (req, res) => {
  try {
    if (ObjectId.isValid(req.params.id)) {
      const id = req.params.id;
      gameService.Delete(id);
      res.status(204).json({ message: "Deletado com sucesso" });
    } else {
      res.status(400).json({ message: "ID não encontrado" });
    }
  } catch (err) {
    res.status(500).json({ message: "Erro interno de servidor" });
    console.log(err);
  }
};

const updateGame = async (req, res) => {
  try {
    if (ObjectId.isValid(req.params.id)) {
      const id = req.params.id;
      // Desestruturação
      //const title = req.body.title
      const { title, year, price, descriptions } = req.body;
      gameService.Update(id, title, year, price, descriptions);
      res.sendStatus(200); // Código 200 (OK): Requisição bem sucedida
    } else {
      res.sendStatus(400); // Código 400 (Bad Request): Requisição mal formada
    }
  } catch (error) {
    console.log(error);
    res.status(500).json({ error: "Erro interno do servidor." });
  }
};

//Função para buscar um único jogo

const getOneGame = async (req,res) => {
  try{
    if(ObjectId.isValid(req.params.id)){
      const id = req.params.id
      const game = await gameService.getOne(id);
      if(!game){
        res.sendStatus(404) //Código não encontrado
      }
      else{
        res.status(200).json({message: "Jogo encontrado", game: game})
      }
    }
    else{
      res.sendStatus(400);
    }
  }catch(err){
    console.log(err)
    res.sendStatus(500);
  }
}

export default { getAllGames, createGame, deleteGame, updateGame,getOneGame };
