import { Link } from "react-router-dom";
import "./error.css";

function Error() {
  return (
    <div className="not-found">
      <h1>404</h1>
      <p>Página não encontrada!</p>
      <Link to="/"> Veja todos os filmes clicando aqui!</Link>
    </div>
  );
}

export default Error;
