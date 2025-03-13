import Game from "../models/Games.js";

class gameService {
  // Game.find().then(games => {
  //     //Sucesso
  // }).catch(error=>{
  //     // falha
  // })
  async getAll() {
    try {
      const games = await Game.find();
      return games;
    } catch (error) {
      console.log(error);
    }
  }

  async Create(title, platform, year, price) {
    try {
      const newGame = new Game({
        title: title,
        platform: platform,
        year: year,
        price: price,
      });
      //.save é o método do moongose para cadastrar .save()
      await newGame.save();
    } catch (err) {
      console.log(err);
    }
  }

  async Delete(id) {
    try {
      await Game.findByIdAndDelete(id);
      console.log(`Game com a id: ${id} foi excluido`);
    } catch (err) {
      console.log(err);
    }
  }

  // Função para alterar jogos
  async Update(id, title, platform, year, price) {
    try {
      await Game.findByIdAndUpdate(id, {
        title,
        platform,
        year,
        price,
      });
      console.log(`Dados do game com a id: ${id} alterados com sucesso.`);
    } catch (error) {
      console.log(error);
    }
  }

  //Função para Listar um Único jogo
  async getOne(id) {
    try {
      const game = await Game.findOne({ _id: id });
      return game;
    } catch (err) {
      console.log(err);
    }
  }
}

export default new gameService();
