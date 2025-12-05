import { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";
import { Imc } from "../../../models/Imc";
import { listar, alterar } from "../../../services/ImcService";

function ImcAlterar() {
  const navigate = useNavigate();
  const [imcs, setImcs] = useState<Imc[]>([]);
  const [idSelecionado, setIdSelecionado] = useState("");
  const [nome, setNome] = useState("");
  const [altura, setAltura] = useState("");
  const [peso, setPeso] = useState("");
  const [classificacao, setClassificacao] = useState("");
  const [dataCriacao, setDataCriacao] = useState("");

  useEffect(() => {
    listar().then((dados) => {
      setImcs(dados);
    });
  }, []);

  function handleSelecionar(e: any) {
    const id = e.target.value;
    setIdSelecionado(id);

    const imcSelecionado = imcs.find((imc) => imc.id === parseInt(id));
    if (imcSelecionado) {
      setNome(imcSelecionado.nome);
      setAltura(imcSelecionado.altura.toString());
      setPeso(imcSelecionado.peso.toString());
      setClassificacao(imcSelecionado.classificacao || "");
      setDataCriacao(imcSelecionado.dataCriacao || "");
    }
  }

  function handleAlterar(e: any) {
    e.preventDefault();

    const imcAtualizado: Imc = {
      nome: nome,
      altura: parseFloat(altura),
      peso: parseFloat(peso),
    };

    alterar(parseInt(idSelecionado), imcAtualizado)
      .then(() => {
        navigate("/pages/imc/listar");
      });
  }

  return (
    <div>
      <h1>Alterar IMC</h1>
      <div>
        <label htmlFor="selecionarImc">Selecione um IMC:</label>
        <select
          id="selecionarImc"
          value={idSelecionado}
          onChange={handleSelecionar}
        >
          <option value="">Selecione</option>
          {imcs.map((imc) => (
            <option key={imc.id} value={imc.id}>
              {imc.id} - {imc.nome}
            </option>
          ))}
        </select>
      </div>

      {idSelecionado && (
        <form onSubmit={handleAlterar}>
          <div>
            <label>ID:</label>
            <input type="text" value={idSelecionado} disabled />
          </div>
          <div>
            <label>Nome:</label>
            <input type="text" value={nome} disabled />
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
          <div>
            <label>Classificação:</label>
            <input type="text" value={classificacao} disabled />
          </div>
          <div>
            <label>Data de Criação:</label>
            <input
              type="text"
              value={new Date(dataCriacao).toLocaleString()}
              disabled
            />
          </div>
          <button type="submit">Alterar</button>
        </form>
      )}
    </div>
  );
}

export default ImcAlterar;
