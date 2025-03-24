import { BrowserRouter, Routes, Route } from "react-router-dom";
import Home from "./pages/Home";
import Sobre from "./pages/Sobre";
import Error from "./pages/Error";
import Header from "./components/Header";
import Produtos from "./pages/Produtos";

//Configurando o componente de roteamento

function RoutesApp() {
  return (
    <BrowserRouter>
      <Header />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/sobre" element={<Sobre />} />
        <Route path="/produtos/:id" element={<Produtos />} />

        <Route path="*" element={<Error />} />
      </Routes>
    </BrowserRouter>
  );
}

export default RoutesApp;
