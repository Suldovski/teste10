import { useState } from "react";
import { useNavigate } from "react-router-dom";
import { Imc } from "../../../models/Imc";
import { cadastrar } from "../../../services/ImcService";

function ImcCadastrar() {
  const navigate = useNavigate();
  const [nome, setNome] = useState("");
  const [altura, setAltura] = useState("");
  const [peso, setPeso] = useState("");

  function handleCadastrar(e: any) {
    e.preventDefault();

    const novoImc: Imc = {
      nome: nome,
      altura: parseFloat(altura),
      peso: parseFloat(peso),
    };

    cadastrar(novoImc)
      .then(() => {
        navigate("/pages/imc/listar");
      });
  }

  return (
    <div>
      <h1>Cadastrar IMC</h1>
      <form onSubmit={handleCadastrar}>
        <div>
          <label htmlFor="nome">Nome:</label>
          <input
            type="text"
            id="nome"
            value={nome}
            onChange={(e) => setNome(e.target.value)}
            required
          />
        </div>
        <div>
          <label htmlFor="altura">Altura (m):</label>
          <input
            type="number"
            step="0.01"
            id="altura"
            value={altura}
            onChange={(e) => setAltura(e.target.value)}
            required
          />
        </div>
        <div>
          <label htmlFor="peso">Peso (kg):</label>
          <input
            type="number"
            step="0.01"
            id="peso"
            value={peso}
            onChange={(e) => setPeso(e.target.value)}
            required
          />
        </div>
        <button type="submit">Cadastrar</button>
      </form>
    </div>
  );
}

export default ImcCadastrar;
