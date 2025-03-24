import { Link } from "react-router-dom";

function Home() {
  return (
    <div>
      <h1>Bem-vindo a página Home!</h1>
      <span>Nossa primeira aplicação em REACT</span> <br />
      <Link to="/sobre">Sobre</Link>
    </div>
  );
}

export default Home;
