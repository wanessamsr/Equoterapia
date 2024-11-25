import "./App.css";
import React from "react";
import Sidebar from "./components/Sidebar.js";
import "bootstrap/dist/css/bootstrap.min.css";
import Agenda from "./components/Agenda.js";
import NewAgenda from "./components/newAgenda.js";
import Login from "./components/Login";
import EsqueceuSenha from "./components/EsqueceuSenha";
import CodigoVerificacao from "./components/Codigo";
import NovaSenha from "./components/NovaSenha";
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import SidebarEquitador from "./components/equitador/SidebarEquitador.js";
import ListarEquino from "./components/equitador/ListarEquino";
import CadastroPraticante1 from "./components/praticante/CadastroPraticante1";
import CadastroPraticante2 from "./components/praticante/CadastroPraticante2";
import ProximasSessoes from "./components/praticante/ProximasSessoes";
import ListarPraticantes from './pages/ListarPraticantes';
import DadosPessoais from './pages/DadosPessoais';
import ExibirAnamnese from './pages/ExibirAnamnese';
import ExibirEvolucoes from './pages/ExibirEvolucoes';

function App() {
  return (
    <Router>
      <div className="app-container">
        <Routes>
          {/* Rotas sem Sidebar */}
          <Route path="/login" element={<Login />} />
          <Route path="/esqueceu-senha" element={<EsqueceuSenha />} />
          <Route path="/codigo-verificacao" element={<CodigoVerificacao />} />
          <Route path="/nova-senha" element={<NovaSenha />} />
          
          {/* Rotas com Sidebar */}
          <Route
            path="/"
            element={
              <div className="app-content">
                <Sidebar />
                <div className="content">
                  <Agenda />
                </div>
              </div>
            }
          />
          <Route
            path="/novo-agendamento"
            element={
              <div className="app-content">
                <Sidebar />
                <div className="content">
                  <NewAgenda />
                </div>
              </div>
            }
          />
          <Route
            path="/equitador/"
            element={
              <div className="row">
                <div className="col-12 col-md-3">
                  <SidebarEquitador />
                </div>
              </div>
            }
          />
          <Route
            path="/equitador/listar-equino"
            element={
              <div className="row">
                <div className="col-12 col-md-3">
                  <SidebarEquitador />
                </div>
                <div className="col-12 col-md-9">
                  <ListarEquino />
                </div>
              </div>
            }
          />
          <Route
            path="/cadastro-praticante"
            element={
              <div className="app-content">
                <Sidebar />
                <div className="content">
                  <CadastroPraticante1 />
                </div>
              </div>
            }
          />
          <Route
            path="/cadastro-praticante/2"
            element={
              <div className="app-content">
                <Sidebar />
                <div className="content">
                  <CadastroPraticante2 />
                </div>
              </div>
            }
          />
          <Route
            path="/proximas-sessoes"
            element={
              <div className="app-content">
                <Sidebar />
                <div className="content">
                  <ProximasSessoes />
                </div>
              </div>
            }
          />
          <Route 
            path="/listar-praticantes" 
            element={
              <div className="app-content">
                <Sidebar />
                <div className="content">
                  <ListarPraticantes />
                </div>
              </div>
            }
          />
          <Route
            path="/exibir-evolucoes"
            element={
              <div className="app-content">
                <Sidebar />
                <div className="content">
                  <ExibirEvolucoes />
                </div>
              </div>
            }
          />
          <Route
            path="/exibir-anamnese"
            element={
              <div className="app-content">
                <Sidebar />
                <div className="content">
                  <ExibirAnamnese />
                </div>
              </div>
            }
          />
          <Route
            path="/dados-pessoais"
            element={
              <div className="app-content">
                <Sidebar />
                <div className="content">
                  <DadosPessoais />
                </div>
              </div>
            }
          />
        </Routes>
      </div>
    </Router>
  );
}

export default App;
