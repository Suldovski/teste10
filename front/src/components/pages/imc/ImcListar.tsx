import { useEffect, useState } from "react";
import { Imc } from "../../../models/Imc";
import { listar } from "../../../services/ImcService";

function ImcListar() {
  const [imcs, setImcs] = useState<Imc[]>([]);

  useEffect(() => {
    listar().then((dados) => {
      setImcs(dados);
    });
  }, []);

  return (
    <div>
      <h1>Listar IMCs</h1>
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
    </div>
  );
}

export default ImcListar;
