import "./App.css";
import React from "react";
import Sidebar from "./components/Sidebar.js";
import "bootstrap/dist/css/bootstrap.min.css";
import Agenda from "./components/Agenda.js";
import NewAgenda from "./components/newAgenda.js";
import Login from "./components/Login";
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";

function App() {
  return (
    <Router>
      <div className="container-fluid">
        <Routes>
          <Route path="/login" element={<Login />} />
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
            path="/new-agenda"
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
