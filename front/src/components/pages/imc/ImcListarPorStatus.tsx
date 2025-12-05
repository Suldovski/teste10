import { useState } from "react";
import { Imc } from "../../../models/Imc";
import { listarPorStatus } from "../../../services/ImcService";

function ImcListarPorStatus() {
  const [classificacao, setClassificacao] = useState("");
  const [imcs, setImcs] = useState<Imc[]>([]);

  function handleBuscar(e: any) {
    e.preventDefault();
    listarPorStatus(classificacao).then((dados) => {
      setImcs(dados);
    });
  }

  return (
    <div>
      <h1>Listar IMC por Classificação</h1>
      <form onSubmit={handleBuscar}>
        <div>
          <label htmlFor="classificacao">Classificação:</label>
          <select
            id="classificacao"
            value={classificacao}
            onChange={(e) => setClassificacao(e.target.value)}
            required
          >
            <option value="">Selecione</option>
            <option value="Magreza">Magreza</option>
            <option value="Normal">Normal</option>
            <option value="Sobrepeso">Sobrepeso</option>
            <option value="Obesidade I">Obesidade I</option>
            <option value="Obesidade II">Obesidade II</option>
            <option value="Obesidade III">Obesidade III</option>
          </select>
        </div>
        <button type="submit">Buscar</button>
      </form>

      {imcs.length > 0 && (
        <table border={1}>
          <thead>
            <tr>
              <th>ID</th>
              <th>Nome</th>
              <th>Altura</th>
              <th>Peso</th>
              <th>IMC</th>
              <th>Classificação</th>
              <th>Data de Criação</th>
            </tr>
          </thead>
          <tbody>
            {imcs.map((imc) => (
              <tr key={imc.id}>
                <td>{imc.id}</td>
                <td>{imc.nome}</td>
                <td>{imc.altura}</td>
                <td>{imc.peso}</td>
                <td>{imc.imc?.toFixed(2)}</td>
                <td>{imc.classificacao}</td>
                <td>{new Date(imc.dataCriacao!).toLocaleString()}</td>
              </tr>
            ))}
          </tbody>
        </table>
      )}
    </div>
  );
}

export default ImcListarPorStatus;
