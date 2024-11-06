import "./App.css";
import React from "react";
import Sidebar from "./components/Sidebar.js";
import "bootstrap/dist/css/bootstrap.min.css";
import Agenda from "./components/Agenda.js";

function App() {
  return (
    <div className="container-fluid">
      <div className="row">
        <div className="col-12 col-md-3">
          <Sidebar />
        </div>
        <div className="col-12 col-md-9">
          <Agenda />
        </div>
      </div>
    </div>
  );
}

export default App;
