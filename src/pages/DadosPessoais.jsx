import React from 'react'; 
import { useNavigate } from 'react-router-dom';
import './styles.css';
import Sidebar from "../components/Sidebar";
function ListarPraticantes() {
  const navigate = useNavigate();
  return (
    <div className="container mt-5">
      <div className="d-flex align-items-center">
        <div className="perfil">
          <img
            src="https://img.freepik.com/fotos-premium/icone-plano-isolado-no-fundo_1258715-220844.jpg?semt=ais_hybrid"
            alt="User Profile"
          />
        </div>
        <div className="mr-3">
          <div className="name-age">
            <h2>João Pedro Martins</h2>
            <p className="text-muted">7 anos</p>
          </div>
        </div>
        <button
          className="btn btn-success ml-auto"
          onClick={() => alert('Editar informações')}
        >
          Editar Informações
        </button>
      </div>
      <div className="btn-group mt-3">
        <button
          className="btn btn-light"
          onClick={() => navigate('/dados-pessoais')}
        >
          Dados Pessoais
        </button>
        <button
          className="btn btn-light"
          onClick={() => navigate('/exibir-anamnese')}
        >
          Exibir Anamnese
        </button>
        <button
          className="btn btn-light"
          onClick={() => navigate('/exibir-evolucoes')}
        >
          Exibir Evoluções
        </button>
      </div>
      <div className="personal-info mt-4">
        <h4 className="info-title">Dados de Identificação</h4>
        <div className="row">
          <div className="col-6">
            <p className="small"><strong>Nome Completo:</strong> João Pedro Martins</p>
            <p className="small"><strong>Sexo:</strong> Masculino</p>
            <p className="small"><strong>Nº Cartão SUS:</strong> 99 99999 9999</p>
            <p className="small"><strong>Data de Nascimento:</strong> 10/06/2017 (7 Anos)</p>
            <p className="small"><strong>Telefone:</strong> (62) 99999-9999</p>
            <p className="small"><strong>E-mail:</strong> exemplo@exemplo.com</p>
          </div>
          <div className="col-6">
            <p className="small"><strong>Endereço:</strong> Av. Pres. Vargas 220, Setor Central 459, Ceres - GO</p>
            <p className="small"><strong>Cuidador:</strong> Mãe</p>
            <p className="small"><strong>Nome do Pai:</strong> Carlos Eduardo Martins</p>
            <p className="small"><strong>Nome da Mãe:</strong> Maria Fernanda Martins</p>
          </div>
        </div>
        <h4 className="info-title mt-4">Escolaridade do Praticante</h4>
        <div className="row">
          <div className="col-6">
            <p className="small"><strong>Escolaridade do Praticante:</strong> Escola Bernardo Sayão (Privada)</p>
            <p className="small"><strong>Ano/Série:</strong> Ensino Fundamental – 2º ano</p>
          </div>
          <div className="col-6">
            <p className="small"><strong>Turma:</strong> Inclusão</p>
            <p className="small"><strong>Período:</strong> Matutino</p>
          </div>
        </div>
        <h4 className="info-title mt-4">Diagnóstico Clínico</h4>
        <p className="small">João Pedro apresenta diagnóstico de Transtorno do Déficit de Atenção com Hiperatividade (TDAH), caracterizado por sintomas de desatenção, impulsividade e hiperatividade. Esses sintomas afetam tanto o desempenho escolar quanto as interações sociais, além de dificultarem o foco em atividades cotidianas.</p>
        <p className="small">No campo motor, João apresenta dificuldades leves de coordenação e equilíbrio, que foram notadas desde a primeira infância. Atraso no desenvolvimento motor foi relatado pelos pais, com dificuldades iniciais em caminhar e manter-se estável sem apoio até aproximadamente 2 anos e meio. Atualmente, essas dificuldades refletem-se na capacidade de realizar atividades físicas que demandam maior controle postural e coordenação motora fina.</p>
      </div>
    </div>
  );
}
export default ListarPraticantes;