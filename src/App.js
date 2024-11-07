import "./App.css";
import React from "react";
import Sidebar from "./components/Sidebar.js";
import "bootstrap/dist/css/bootstrap.min.css";
import Agenda from "./components/Agenda.js";
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import NewAgenda from "./components/newAgenda.js";

function App() {
  return (
    <Router>
      <div className="container-fluid">
        <div className="row">
          <div className="col-12 col-md-3">
            <Sidebar />
          </div>
          <div className="col-12 col-md-9">
            <Routes>
              <Route path="/" element={<Agenda />} />
              <Route path="/new-agenda" element={<NewAgenda />} />
            </Routes>
          </div>
        </div>
      </div>
    </Router>
  );
}

export default App;
