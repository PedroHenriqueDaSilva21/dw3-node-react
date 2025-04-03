import { useState } from "react";

const Counter = () => {
    //Criando um estado para o contador
    //[Pegar Valor, Altera Valor(estado)]
    const[count,setCount] = useState(0)
return(
    <>
      <div>
        <p>Contador: {count} </p>
        <button onClick={() => setCount(count + 1)}>Aumentar</button>
        <button onClick={() => setCount(count - 1)}>Diminuir</button>
        <button onClick={() => setCount(0)}>Zerar</button>
      </div>
    </>
)
}

export default Counter;