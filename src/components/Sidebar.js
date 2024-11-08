import React, { useState } from "react";
import { RxExit } from "react-icons/rx";
import "./Sidebar.css";


const Sidebar = () => {
  const [activeButton, setActiveButton] = useState(null);

  const handleButtonClick = (button) => {
    setActiveButton(button);
  };

  return (
    <div className="d-flex flex-column sidebar p-3">
      <button className="btn exit-button d-flex align-items-center">
        <RxExit className="exit-icon me-1 icon-large" />
        <span>Sair</span>
      </button>

      <div className="profile-pic my-4">
        <img
          src="https://img.freepik.com/fotos-premium/icone-plano-isolado-no-fundo_1258715-220844.jpg?semt=ais_hybrid"
          alt="User Profile"
          className="rounded-circle"
        />
      </div>

      <h5 className="text-center mb-2 fw-bold">Bem Vindo!</h5>
      <h6 className="username mb-5 fw-bold">Nome do Usuário</h6>

      <button
        className={`btn sidebar-button mb-4 fw-bold ${
          activeButton === "agenda" ? "active-button" : "btn-light"
        }`}
        onClick={() => handleButtonClick("agenda")}
      >
        Acessar Agenda <span className="arrow">&gt;</span>
      </button>
      <button
        className={`btn sidebar-button mb-4 fw-bold ${
          activeButton === "sessions" ? "active-button" : "btn-light"
        }`}
        onClick={() => handleButtonClick("sessions")}
      >
        Próximas Sessões <span className="arrow">&gt;</span>
      </button>
      <button
        className={`btn sidebar-button mb-4 fw-bold ${
          activeButton === "practitioners" ? "active-button" : "btn-light"
        }`}
        onClick={() => handleButtonClick("practitioners")}
      >
        Listar Praticantes <span className="arrow">&gt;</span>
      </button>
    </div>
  );
};

export default Sidebar;
