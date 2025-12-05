import { BrowserRouter, Routes, Route, Link } from "react-router-dom";
import ImcCadastrar from "./components/pages/imc/ImcCadastrar";
import ImcListar from "./components/pages/imc/ImcListar";
import ImcListarPorStatus from "./components/pages/imc/ImcListarPorStatus";
import ImcAlterar from "./components/pages/imc/ImcAlterar";

function App() {
  return (
    <BrowserRouter>
      <div>
        <nav>
          <ul style={{ listStyle: "none", padding: 0 }}>
            <li>
              <Link to="/">Início</Link>
            </li>
            <li>
              <Link to="/pages/imc/cadastrar">Cadastrar IMC</Link>
            </li>
            <li>
              <Link to="/pages/imc/listar">Listar IMCs</Link>
            </li>
            <li>
              <Link to="/pages/imc/listarporstatus">Listar por Classificação</Link>
            </li>
            <li>
              <Link to="/pages/imc/alterar">Alterar IMC</Link>
            </li>
          </ul>
        </nav>

        <Routes>
          <Route path="/" element={<h1>Sistema de IMC</h1>} />
          <Route path="/pages/imc/cadastrar" element={<ImcCadastrar />} />
          <Route path="/pages/imc/listar" element={<ImcListar />} />
          <Route path="/pages/imc/listarporstatus" element={<ImcListarPorStatus />} />
          <Route path="/pages/imc/alterar" element={<ImcAlterar />} />
        </Routes>
      </div>
    </BrowserRouter>
  );
}

export default App;
