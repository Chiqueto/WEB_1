import { useParams } from "react-router-dom";

function Produtos() {
  const { id } = useParams();
  if (id === "playstation") {
    return (
      <div>
        <h1>Console Playstation 5</h1>
        <br />
        <h2>R$ 4.445,00</h2>
        <br />
        <h3>à vista no Pix e boleto (1% off)</h3>
        <br />
        <img
          src="https://cdn.awsli.com.br/1919/1919257/arquivos/imagem_2021-12-03_141412.png"
          alt="Console Playstation 5"
        />
      </div>
    );
  }

  if (id === "xbox") {
    return (
      <div>
        <h1>Console Microsoft Xbox Series X, 1TB, Preto</h1>
        <br />
        <h2>R$ 4.799,99</h2>
        <br />
        <h3>à vista no PIX ou Em até 10x de R$ 479,99 sem juros no cartão</h3>
        <br />
        <img
          src="https://assets.xboxservices.com/assets/cb/f8/cbf83b9d-bf30-4e36-96ad-fef4293ff944.png?n=XBX-CMP-L-Console-Large-D_02.png"
          alt="Console Playstation 5"
        />
      </div>
    );
  }
}

export default Produtos;
