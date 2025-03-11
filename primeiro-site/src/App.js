import Nome from "./components/Nome";
import { useState } from "react";
function App() {
  const [aluno, setAluno] = useState("Aluno");

  const handleChangeName = (nome) => {
    setAluno(nome);
  };

  return (
    <div>
      <h1>Minha página web</h1>
      <h2>Olá {aluno}</h2>
      <Nome aluno={aluno} />
      <button onClick={() => handleChangeName("Márcio Funes")}>
        Mudar nome
      </button>
    </div>
  );
}

export default App;
