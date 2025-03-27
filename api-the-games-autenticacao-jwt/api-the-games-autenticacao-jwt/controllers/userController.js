import userService from "../services/userService.js";
import jwt from "jsonwebtoken";
//JWSecret

const JWTSecret = "apigamessecret";

// Cadastrando um usuário

const createUser = async (req, res) => {
  try {
    const { name, email, password } = req.body;
    // AQUI SERIA FEITO O PROCESSO DE HASH
    await userService.Create(name, email, password);
    res.sendStatus(201);
  } catch (error) {
    console.log(error);
    res.sendStatus(500);
  }
};

const loginUser = async (req, res) => {
  try {
    const { email, password } = req.body;
    if (email != undefined) {
      const user = await userService.getOne(email);
      //Usuário encontrado
      if (user != undefined) {
        //senha correta
        if (user.password == password) {
          //gerando o token
          jwt.sign(
            { id: user._id, email: user.email },
            JWTSecret,
            { expiresIn: "48h" },
            (err, token) => {
              if (err) {
                res.status(400).json({ error: "Erro ao gerar token" }); // Bad Request
              } else {
                res.status(200).json({ token: token });
              }
            }
          );
        }
        //Senha Incorreta
        else {
          res.status(401).json({ error: "Credenciais inválidas" });
        }
      } else{
        res.status(404).json({error : "Usuário Não Encontrado"})
      }
    } else{
        res.status(400).json({error: "O email enviado é inválido"})
    }
  } catch (error) {
    console.log(error);
    res.sendStatus(500);
  }
};

export default { createUser, loginUser };
