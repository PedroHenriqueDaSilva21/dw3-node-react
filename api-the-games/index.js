import express from "express";
const app = express();

// Configurações do Express

app.use(express.urlencoded({ extended: false }));
app.use(express.json());

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
  res.json(games)
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
