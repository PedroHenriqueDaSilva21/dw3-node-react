import gameService from "../services/gameService.js";

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

export default { getAllGames };
