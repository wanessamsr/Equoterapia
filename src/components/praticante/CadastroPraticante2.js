// CadastroPraticante2.js
import React from 'react';
import { Form, Row, Col, Button } from 'react-bootstrap';
import './CadastroPraticante2.css';

const CadastroPraticante2 = () => {
  return (
    <div className="container my-5">
      <div className="cadastro-title mb-4">
        Cadastre um novo praticante 2/2
      </div>

      <Form className="cadastro-form">
        {/* Cronograma de atividade */}
        <div className="section-title mb-4">
          Cronograma de atividade do Praticante em outras instituições
        </div>

        <div className="schedule-table mb-4">
          <table className="table table-bordered">
            <thead>
              <tr>
                <th>Turno/dia</th>
                <th>Segunda</th>
                <th>Terça</th>
                <th>Quarta</th>
                <th>Quinta</th>
                <th>Sexta</th>
              </tr>
            </thead>
            <tbody>
              <tr>
                <td>Matutino</td>
                <td><Form.Check type="checkbox" /></td>
                <td><Form.Check type="checkbox" /></td>
                <td><Form.Check type="checkbox" /></td>
                <td><Form.Check type="checkbox" /></td>
                <td><Form.Check type="checkbox" /></td>
              </tr>
              <tr>
                <td>Vespertino</td>
                <td><Form.Check type="checkbox" /></td>
                <td><Form.Check type="checkbox" /></td>
                <td><Form.Check type="checkbox" /></td>
                <td><Form.Check type="checkbox" /></td>
                <td><Form.Check type="checkbox" /></td>
              </tr>
            </tbody>
          </table>
        </div>

        <Row className="mb-4">
          <Col xs={12}>
            <Form.Group>
              <Form.Label>Observações</Form.Label>
              <Form.Control 
                as="textarea" 
                rows={4}
                placeholder="Observação (horário desejado das sessões de Equoterapia)"
                className="input-field"
              />
            </Form.Group>
          </Col>
        </Row>

        {/* Em caso de emergência */}
        <div className="section-title mb-4">Em caso de emergência</div>
        
        <Row className="mb-4">
          <Col xs={12} md={8}>
            <Form.Group>
              <Form.Label>Ligar para</Form.Label>
              <Form.Control 
                type="text"
                placeholder="Nome do responsável"
                className="input-field"
              />
            </Form.Group>
          </Col>
          <Col xs={12} md={4}>
            <Form.Group>
              <Form.Label>Telefone</Form.Label>
              <Form.Control 
                type="text"
                placeholder="(00) 0 0000-0000"
                className="input-field"
              />
            </Form.Group>
          </Col>
        </Row>

        <Row className="mb-4">
          <Col xs={12}>
            <Form.Group>
              <Form.Label>Plano de Saúde</Form.Label>
              <Form.Control 
                type="text"
                placeholder="Digite o qual plano de saúde (opcional)"
                className="input-field"
              />
            </Form.Group>
          </Col>
        </Row>

        {/* Informações complementares */}
        <div className="section-title mb-4">Informações complementares</div>

        <Row className="mb-4">
          <Col xs={12} md={6}>
            <Form.Group>
              <Form.Label>Data de Avaliação</Form.Label>
              <Form.Control 
                type="text"
                placeholder="00/00/00"
                className="input-field"
              />
            </Form.Group>
          </Col>
          <Col xs={12} md={6}>
            <Form.Group>
              <Form.Label>Previsão de Alta da Equoterápicas</Form.Label>
              <Form.Control 
                type="text"
                placeholder="00/00/00"
                className="input-field"
              />
            </Form.Group>
          </Col>
        </Row>

        <Row className="mb-4">
          <Col xs={12} md={6}>
            <Form.Group>
              <Form.Label>Profissional responsável pela coleta de informações</Form.Label>
              <Form.Control 
                type="text"
                placeholder="Nome do responsável"
                className="input-field"
              />
            </Form.Group>
          </Col>
          <Col xs={12} md={6}>
            <Form.Group>
              <Form.Label>Número de Registro</Form.Label>
              <Form.Control 
                type="text"
                placeholder="Número de registro"
                className="input-field"
              />
            </Form.Group>
          </Col>
        </Row>

        {/* Botões de ação */}
        <Row className="mt-4">
          <Col className="d-flex justify-content-end">
            <Button variant="secondary" className="me-2 btn-voltar">
              Voltar
            </Button>
            <Button variant="primary" className="btn-concluir">
              Concluir novo cadastro
            </Button>
          </Col>
        </Row>
      </Form>
    </div>
  );
};

export default CadastroPraticante2;