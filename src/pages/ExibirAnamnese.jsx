import React from 'react'; 
import { useNavigate } from 'react-router-dom'; 
import Sidebar from "../components/Sidebar";
import './styles.css';  
function ExibirAnamnese() {
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
      <div className="historico-familiar mt-4">
        <h4 className="info-title">Histórico Familiar</h4>
        <p className="small"><strong>Doenças Genéticas:</strong> Avó paterna com histórico de hipertensão.</p>
        <p className="small"><strong>Condições Médicas:</strong> Mãe com histórico de ansiedade generalizada.</p>
        <p className="small"><strong>Outros:</strong> Tio materno com diagnóstico de diabetes tipo 2.</p>
      </div>
      <div className="condicoes-saude mt-4">
        <h4 className="info-title">Condições de Saúde Atuais</h4>
        <p className="small"><strong>Alergias:</strong> Alergia a pólen e poeira.</p>
        <p className="small"><strong>Problemas Respiratórios:</strong> Episódios ocasionais de asma, controlados com medicação.</p>
        <p className="small"><strong>Tratamentos em andamento:</strong> Uso de medicamentos para controle de ansiedade.</p>
      </div>
      <div className="desenvolvimento-psicomotor mt-4">
        <h4 className="info-title">Desenvolvimento Psicomotor</h4>
        <p className="small"><strong>Primeiros Marcos:</strong> Caminhou sozinho aos 14 meses. Começou a falar com 2 anos.</p>
        <p className="small"><strong>Coordenação Motora:</strong> Boas habilidades motoras grossas, dificuldades em coordenação fina, como amarrar sapatos.</p>
        <p className="small"><strong>Desempenho Escolar:</strong> Bom desempenho em tarefas manuais, mas dificuldade com concentração nas tarefas escolares.</p>
      </div>
      <div className="observacoes-familia mt-4">
        <h4 className="info-title">Observações para a Família</h4>
        <p className="small">
          Recomenda-se que os pais implementem rotinas diárias consistentes para ajudar João Pedro a melhorar sua concentração.
          Atividades físicas diárias, como natação, podem contribuir para o desenvolvimento motor e reduzir os sintomas de ansiedade.
        </p>
        <p className="small">
          A comunicação aberta e regular entre os profissionais de saúde e os pais é essencial para garantir o progresso no tratamento.
        </p>
        <div className="d-flex justify-content-between mt-3">
          <button className="btn btn-light" onClick={() => alert('Editar Observações para a Família')}>
            Editar
          </button>
          <button className="btn btn-success" onClick={() => alert('Adicionar Novo Campo')}>
            Anexar Novo Campo
          </button>
        </div>
      </div>
    </div>
  );
}
export default ExibirAnamnese;