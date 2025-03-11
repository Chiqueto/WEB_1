import { useState } from "react";

function Cadastro1() {
  const [nome, setNome] = useState("");
  const [email, setEmail] = useState("");
  const [idade, setIdade] = useState("");
  const [user, setUser] = useState({});

  function handleRegistro(e) {
    e.preventDefault();
    setUser({
      nome: nome,
      email: email,
      idade: idade,
    });
  }

  return (
    <div>
      <form onSubmit={handleRegistro}>
        <label>Nome: </label>
        <br />
        <input
          placeholder="Digite seu nome"
          value={nome}
          onChange={(e) => setNome(e.target.value)}
        />
        <br />
        <label>Email: </label>
        <br />
        <input
          placeholder="Digite seu email"
          value={email}
          onChange={(e) => setEmail(e.target.value)}
        />
        <br />
        <label>Idade: </label>
        <br />
        <input
          placeholder="Digite sua idade"
          value={idade}
          onChange={(e) => setIdade(e.target.value)}
        />
        <br />
        <button type="submit">Registro</button>
      </form>
      <br /> <br />
      <div>
        <span>Bem vindo, {user.nome}</span>
        <br />
        <span>Idade: {user.idade}</span>
        <br />
        <span>Email: {user.email}</span>
        <br />
      </div>
    </div>
  );
}

export default Cadastro1;
