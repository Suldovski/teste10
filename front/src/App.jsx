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
              <Link to="/imc/cadastrar">Cadastrar IMC</Link>
            </li>
            <li>
              <Link to="/imc/listar">Listar IMCs</Link>
            </li>
            <li>
              <Link to="/imc/listarporstatus">Listar por Classificação</Link>
            </li>
            <li>
              <Link to="/imc/alterar">Alterar IMC</Link>
            </li>
          </ul>
        </nav>

        <Routes>
          <Route path="/" element={<h1>Sistema de IMC</h1>} />
          <Route path="/imc/cadastrar" element={<ImcCadastrar />} />
          <Route path="/imc/listar" element={<ImcListar />} />
          <Route path="/imc/listarporstatus" element={<ImcListarPorStatus />} />
          <Route path="/imc/alterar" element={<ImcAlterar />} />
        </Routes>
      </div>
    </BrowserRouter>
  );
}

export default App;
