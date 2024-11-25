import React, { useState } from 'react'; 
import { useNavigate } from 'react-router-dom'; 
import Sidebar from "../components/Sidebar"; 
import './styles.css'; 

function ExibirEvolucoes() {
  const navigate = useNavigate(); 
  const [sessao, setSessao] = useState('Sessão 1 - (05/08/2024)'); 

  const handleSessaoChange = (event) => {
    setSessao(event.target.value); 
  };

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

      <div className="mt-4">
        <select 
          id="sessaoSelect" 
          className="form-select" 
          value={sessao} 
          onChange={handleSessaoChange}
        >
          <option value="Sessão 1 - (05/08/2024)">Sessão 1 - (05/08/2024)</option>
          <option value="Sessão 2 - (05/08/2024)">Sessão 2 - (05/08/2024)</option>
          <option value="Sessão 3 - (12/08/2024)">Sessão 3 - (12/08/2024)</option>
          <option value="Sessão 4 - (19/08/2024)">Sessão 4 - (19/08/2024)</option>
        </select>
      </div>

      <div className="observacoes mt-4">
        <h4 className="info-title">Observações Gerais</h4>
        <p className="small">
          Houve uma participação ativa nas atividades, com boa coordenação durante os exercícios de equilíbrio. No início, o paciente apresentou sinais de ansiedade, mas relaxou após interagir com o cavalo, demonstrando isso com sorrisos e risadas durante a montaria. A comunicação com o cavalo foi adequada, e ele seguiu as instruções do terapeuta com sucesso. O passeio na pista foi bem recebido, e o paciente conseguiu realizar exercícios de respiração, demonstrando foco. No entanto, enfrentou dificuldades em guiar o cavalo e mostrou frustração em atividades mais desafiadoras.
        </p>
      </div>

      <div className="observacoes mt-4">
        <h4 className="info-title">Observações para a Próxima Sessão</h4>
        <p className="small">
          Será necessário incluir atividades de guia mais simples e aumentar o tempo de interação com o cavalo. Como estratégia de engajamento, será útil usar brinquedos que o praticante gosta como recompensa. Além disso, é importante manter a comunicação com a equipe de terapia ocupacional para acompanhamento contínuo.
        </p>
      </div>

      <div className="observacoes mt-4">
        <h4 className="info-title">Equipe utilizada na Sessão</h4>
        <p className="small">
          <strong>Condutor:</strong> João Silva<br />
          <strong>Mediador(es):</strong> Ana Souza, Pedro Almeida<br />
          <strong>Encilhamento:</strong> Completo, com manta e estribo ajustados<br />
          <strong>Cavalo:</strong> Thor
        </p>
      </div>

    </div>
  );
}

export default ExibirEvolucoes;
