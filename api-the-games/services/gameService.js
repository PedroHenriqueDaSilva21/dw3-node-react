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
}

export default new gameService();
