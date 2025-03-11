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
  try{
    const title = req.body.title
    const platform = req.body.platform
    const year = req.body.year
    const price = req.body.price

    //Capturando valores através da desustruração
   // const { title, platform, year, price} = req.body
    //Cadastrando no Banco de Dados
    await gameService.Create(title,platform,year,price);
    res.status(201).json({message: "Recurso criado com sucesso"}) //Recurso criado com sucesso
  }catch(err){
    console.log(err)
    res.status(500).json({error: "Erro interno do servidor"})
  }
}

//Função para Deletar Jogos

const deleteGame = async (req,res) => {
  try{
    if(ObjectId.isValid(req.params.id)){
      const id = req.params.id
      gameService.Delete(id)
      res.status(204).json({message: "Deletado com sucesso"})
    }
    else{
      res.status(400).json({message: "ID não encontrado"})
    }
  }catch(err){
    res.status(500).json({message: "Erro interno de servidor"})
    console.log(err)
  }
}

export default { getAllGames, createGame, deleteGame };
