import styles from "@/components/CreateContent/CreateContent.module.css";
import { useState } from "react";

const CreateContent = () => {
  //Criando os estados para as informações do jogo
  const [title,setTitle] = useState("");
  const [platform,setPlataform] = useState("");
  const [genre,setGenre] = useState("")
  const [rating,setRating] = useState("")
  const [year, setYear] = useState("")
  const [price,setPrice] = useState("")

  return (
    <div className={styles.createContent}>
      <div className="title">
        <h2>Cadastrar novo jogo</h2>
      </div>
      <form id="createForm" className="formPrimary">
        <input
          type="text"
          name="title"
          id="title"
          placeholder="Insira o título do jogo"
          className="inputPrimary"
          onChange={(e) => setTitle(e.target.value)}
          value={title}
        />
        <input
          type="text"
          name="platform"
          id="platform"
          placeholder="Insira a plataforma do jogo"
          className="inputPrimary"
          onChange={(e) => setPlataform(e.target.value)}
          value={platform}
        />
        <input
          type="text"
          name="genre"
          id="genre"
          placeholder="Insira o genero do jogo"
          className="inputPrimary"
          onChange={(e) => setGenre(e.target.value)}
          value={genre}
        />
        <input
          type="text"
          name="rating"
          id="rating"
          placeholder="Insira o rating do jogo"
          className="inputPrimary"
          onChange={(e) => setRating(e.target.value)}
          value={rating}
        />
        <input
          type="number"
          name="year"
          id="year"
          placeholder="Insira o ano do jogo"
          className="inputPrimary"
          onChange={(e) => setYear(e.target.value)}
          value={year}
        />
        <input
          type="number"
          name="price"
          id="price"
          placeholder="Insira o preço do jogo"
          className="inputPrimary"
          onChange={(e) => setPrice(e.target.value)}
          value={price}
        />
        <input
          type="submit"
          value="Cadastrar"
          id="createBtn"
          className="btnPrimary"
        />
      </form>
      <div style={{color: "white"}}>
        {title}<br></br>
        {platform}<br></br>
        {genre}<br></br>
        {rating}<br></br>
        {year}<br></br>
        {price}<br></br>
      </div>
    </div>
  );
};

export default CreateContent;
