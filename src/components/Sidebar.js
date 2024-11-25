import React, { useState } from "react";
import { RxExit } from "react-icons/rx";
import { Link, useNavigate } from "react-router-dom";  // Importar useNavigate
import { FaBars } from "react-icons/fa"; // Ícone para abrir a sidebar
import "./Sidebar.css";

const Sidebar = () => {
  const [activeButton, setActiveButton] = useState(null);
  const [isSidebarOpen, setIsSidebarOpen] = useState(false); // Estado para controlar a abertura da sidebar
  const navigate = useNavigate();  // Hook para navegação programática

  const handleButtonClick = (button) => {
    setActiveButton(button);
    if (button === "agenda") {
      navigate("/");
    }
    if (button === "sessoes") {
      navigate("/proximas-sessoes"); 
    }
    if (button === "praticantes") {
      navigate("/listar-praticantes");  // Agora a navegação para a página de Listar Praticantes
    }
  };

  const toggleSidebar = () => {
    setIsSidebarOpen(!isSidebarOpen); // Alterna a sidebar entre aberta e fechada
  };

  return (
    <>
      {/* Botão para abrir a sidebar em telas pequenas */}
      <button className="sidebar-toggle" onClick={toggleSidebar}>
        <FaBars />
      </button>

      {/* Sidebar */}
      <div className={`sidebar p-3 ${isSidebarOpen ? "open" : ""}`}>
        <Link to="/login" className="btn exit-button d-flex align-items-center">
          <RxExit className="exit-icon me-1 icon-large" />
          <span>Sair</span>
        </Link>

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
          onClick={() => handleButtonClick("agenda")}  // Atualiza para navegar
        >
          Acessar Agenda <span className="arrow">&gt;</span>
        </button>
        <button
          className={`btn sidebar-button mb-4 fw-bold ${
            activeButton === "sessoes" ? "active-button" : "btn-light"
          }`}
          onClick={() => handleButtonClick("sessoes")}
        >
          Próximas Sessões <span className="arrow">&gt;</span>
        </button>
        <button
          className={`btn sidebar-button mb-4 fw-bold ${
            activeButton === "praticantes" ? "active-button" : "btn-light"
          }`}
          onClick={() => handleButtonClick("praticantes")}  // Modificado para "praticantes"
        >
          Listar Praticantes <span className="arrow">&gt;</span>
        </button>
      </div>
    </>
  );
};

export default Sidebar;
