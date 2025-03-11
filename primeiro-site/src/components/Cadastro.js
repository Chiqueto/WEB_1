import { useState, useEffect } from "react";

function Cadastro() {
  const [input, setInput] = useState("");
  const [tarefas, setTarefas] = useState([
    "Pagar conta de luz",
    "Estudar Programação",
    "Enviar a tarefa",
  ]);
  const [name, setName] = useState(localStorage.getItem("@name"));
  const [bgColor, setBgColor] = useState("#ffffff");

  const tarefasStorage = localStorage.getItem("@tarefas");

  useEffect(() => {
    setName(prompt("Qual é o seu nome?"));

    if (tarefasStorage) {
      setTarefas(JSON.parse(tarefasStorage));
    }
  }, []);

  useEffect(() => {
    if (name) {
      localStorage.setItem("@name", name);
    }
  }, [name]);

  useEffect(() => {
    localStorage.setItem("@tarefas", JSON.stringify(tarefas));
  }, [tarefas]);

  useEffect(() => {
    document.body.style.backgroundColor = bgColor;
  }, [bgColor]);

  function handleRegistro(e) {
    e.preventDefault();

    setTarefas([...tarefas, input]);
    setInput("");
  }

  const handleBgColor = (e) => {
    setBgColor(e.target.value);
  };

  return (
    <div>
      <h1>{name}, sua lista de tarefas</h1>
      <form onSubmit={handleRegistro}>
        <label>Nome: </label>
        <br />
        <input
          placeholder="Digite uma tarefa"
          value={input}
          onChange={(e) => setInput(e.target.value)}
        />
        <br />
        <button type="submit">Registro</button>
      </form>
      <br /> <br />
      <ul>
        {tarefas.map((tarefa) => (
          <li key={tarefa}>{tarefa}</li>
        ))}
      </ul>
      <br />
      <input
        type="radio"
        id="blanchedalmond"
        name="bg-color"
        value="#ffebcd"
        onClick={(e) => handleBgColor(e)}
      />
      <label for="blanchedalmond">blanchedalmond</label>
      <br />
      <input
        type="radio"
        id="crimson "
        name="bg-color"
        value="#dc143c"
        onClick={(e) => handleBgColor(e)}
      />
      <label for="crimson ">crimson </label>
      <br />
      <input
        type="radio"
        id="deeppink "
        name="bg-color"
        value="#ff1493"
        onClick={(e) => handleBgColor(e)}
      />
      <label for="deeppink ">deeppink </label>
      <br></br>
    </div>
  );
}

export default Cadastro;
