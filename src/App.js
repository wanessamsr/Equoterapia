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

function App() {
  return (
    <Router>
      <div className="container-fluid">
        <Routes>
          <Route path="/login" element={<Login />} />
          <Route path="/esqueceu-senha" element={<EsqueceuSenha />} />
          <Route path="/codigo-verificacao" element={<CodigoVerificacao />} />
          <Route path="/nova-senha" element={<NovaSenha />} />
          {/* Rotas para as outras páginas */}
          <Route
            path="/"
            element={
              <div className="row">
                <div className="col-12 col-md-3">
                  <Sidebar />
                </div>
                <div className="col-12 col-md-9">
                  <Agenda />
                </div>
              </div>
            }
          />
          <Route
            path="/novo-agendamento"
            element={
              <div className="row">
                <div className="col-12 col-md-3">
                  <Sidebar />
                </div>
                <div className="col-12 col-md-9">
                  <NewAgenda />
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
