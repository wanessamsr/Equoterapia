// CadastroPraticante1.js
import React from 'react';
import { Form, Row, Col, Button } from 'react-bootstrap';
import './CadastroPraticante1.css';

const CadastroPraticante1 = () => {
  return (
    <div className="container my-5">
      <div className="cadastro-title mb-4">
        Cadastre um novo praticante
      </div>

      <Form className="cadastro-form">
        {/* Nome do Praticante e Foto */}
        <Row className="mb-4">
          <Col xs={12} md={8}>
            <Form.Group>
              <Form.Label>Nome do Praticante</Form.Label>
              <Form.Control 
                type="text"
                placeholder="Selecione o Praticante"
                className="input-field"
              />
            </Form.Group>
          </Col>
          <Col xs={12} md={4} className="d-flex align-items-center justify-content-center">
            <div className="foto-placeholder">
              <span className="add-photo">+</span>
            </div>
          </Col>
        </Row>

        {/* Escolaridade */}
        <div className="section-title mb-3">Escolaridade</div>
        <Row className="mb-4">
          <Col xs={12} md={4}>
            <Form.Group>
              <Form.Label>Turma</Form.Label>
              <Form.Control 
                type="text" 
                placeholder="00/00/00"
                className="input-field"
              />
            </Form.Group>
          </Col>
          <Col xs={12} md={4}>
            <Form.Group>
              <Form.Label>Ano/Série</Form.Label>
              <Form.Control 
                type="text" 
                placeholder="00:00"
                className="input-field"
              />
            </Form.Group>
          </Col>
          <Col xs={12} md={4}>
            <Form.Group>
              <Form.Label>Modalidade Escolar</Form.Label>
              <Form.Control 
                type="text" 
                placeholder="Nome do Condutor"
                className="input-field"
              />
            </Form.Group>
          </Col>
        </Row>

        <Row className="mb-4">
          <Col xs={12} md={6}>
            <Form.Group>
              <Form.Label>Instituição de Ensino</Form.Label>
              <Form.Control 
                type="text" 
                placeholder="Digite o nome do Mediador"
                className="input-field"
              />
            </Form.Group>
          </Col>
          <Col xs={12} md={6}>
            <Form.Group>
              <Form.Label>Turno de Estudo</Form.Label>
              <Form.Select className="input-field">
                <option>Selecione o Encilhamento utilizado</option>
              </Form.Select>
            </Form.Group>
          </Col>
        </Row>

        {/* Dados de Identificação */}
        <div className="section-title mb-3">Dados de Identificação</div>
        <Row className="mb-4">
          <Col xs={12} md={4}>
            <Form.Group>
              <Form.Label>Data de Avaliação</Form.Label>
              <Form.Control 
                type="text" 
                placeholder="00/00/00"
                className="input-field"
              />
            </Form.Group>
          </Col>
          <Col xs={12} md={4}>
            <Form.Group>
              <Form.Label>Cartão SUS</Form.Label>
              <Form.Control 
                type="text" 
                placeholder="Nº cartão SUS"
                className="input-field"
              />
            </Form.Group>
          </Col>
          <Col xs={12} md={4}>
            <Form.Group>
              <Form.Label>Sexo</Form.Label>
              <Form.Select className="input-field">
                <option>Selecione o sexo</option>
              </Form.Select>
            </Form.Group>
          </Col>
        </Row>

        <Row className="mb-4">
          <Col xs={12} md={4}>
            <Form.Group>
              <Form.Label>Data de Nascimento</Form.Label>
              <Form.Control 
                type="text" 
                placeholder="00/00/00"
                className="input-field"
              />
            </Form.Group>
          </Col>
          <Col xs={12} md={4}>
            <Form.Group>
              <Form.Label>Idade Atual</Form.Label>
              <Form.Control 
                type="text" 
                placeholder="00/00/00"
                className="input-field"
              />
            </Form.Group>
          </Col>
          <Col xs={12} md={4}>
            <Form.Group>
              <Form.Label>Endereço</Form.Label>
              <Form.Control 
                type="text" 
                placeholder="Digite o endereço do praticante"
                className="input-field"
              />
            </Form.Group>
          </Col>
        </Row>

        <Row className="mb-4">
          <Col xs={12} md={6}>
            <Form.Group>
              <Form.Label>Nome do Pai</Form.Label>
              <Form.Control 
                type="text" 
                placeholder="Digite o nome do responsável"
                className="input-field"
              />
            </Form.Group>
          </Col>
          <Col xs={12} md={6}>
            <Form.Group>
              <Form.Label>Nome da Mãe</Form.Label>
              <Form.Control 
                type="text" 
                placeholder="Digite o nome do responsável"
                className="input-field"
              />
            </Form.Group>
          </Col>
        </Row>

        <Row className="mb-4">
          <Col xs={12} md={6}>
            <Form.Group>
              <Form.Label>Endereço do trabalho</Form.Label>
              <Form.Control 
                type="text" 
                placeholder="Digite o endereço de trabalho"
                className="input-field"
              />
            </Form.Group>
          </Col>
          <Col xs={12} md={3}>
            <Form.Group>
              <Form.Label>Telefone</Form.Label>
              <Form.Control 
                type="text" 
                placeholder="(00) 0 0000-0000"
                className="input-field"
              />
            </Form.Group>
          </Col>
          <Col xs={12} md={3}>
            <Form.Group>
              <Form.Label>Cuidador</Form.Label>
              <Form.Select className="input-field">
                <option>Selecione o cuidador</option>
              </Form.Select>
            </Form.Group>
          </Col>
        </Row>

        {/* Diagnostico Clínico */}
        <div className="section-title mb-3">Diagnóstico Clínico</div>
        <Row className="mb-4">
          <Col xs={12}>
            <Form.Group>
              <Form.Label>Diagnóstico Clínico</Form.Label>
              <Form.Control 
                as="textarea" 
                rows={4}
                placeholder="Digite o diagnóstico Clínico do praticante..."
                className="input-field"
              />
            </Form.Group>
          </Col>
        </Row>

        {/* Responsáveis pelo Praticante */}
        <div className="section-title mb-3">Responsáveis pelo Praticante</div>
        <div className="responsavel-section mb-4">
          <div className="sub-title mb-3">Responsável 1</div>
          <Row className="mb-3">
            <Col xs={12} md={6}>
              <Form.Group>
                <Form.Label>Grau de parentesco</Form.Label>
                <Form.Select className="input-field">
                  <option>Selecione o grau de parentesco</option>
                </Form.Select>
              </Form.Group>
            </Col>
            <Col xs={12} md={6}>
              <Form.Group>
                <Form.Label>Profissão</Form.Label>
                <Form.Control 
                  type="text" 
                  placeholder="Digite a profissão"
                  className="input-field"
                />
              </Form.Group>
            </Col>
          </Row>

          <Row className="mb-4">
            <Col xs={12} md={4}>
              <Form.Group>
                <Form.Label>Data de Nascimento</Form.Label>
                <Form.Control 
                  type="text" 
                  placeholder="00/00/00"
                  className="input-field"
                />
              </Form.Group>
            </Col>
            <Col xs={12} md={4}>
              <Form.Group>
                <Form.Label>E-mail</Form.Label>
                <Form.Control 
                  type="email" 
                  placeholder="Digite o e-mail"
                  className="input-field"
                />
              </Form.Group>
            </Col>
            <Col xs={12} md={4}>
              <Form.Group>
                <Form.Label>Telefone do trabalho</Form.Label>
                <Form.Control 
                  type="text" 
                  placeholder="(00) 0 0000-0000"
                  className="input-field"
                />
              </Form.Group>
            </Col>
          </Row>
        </div>

        <div className="responsavel-section mb-4">
          <div className="sub-title mb-3">Responsável 2</div>
          <Row className="mb-3">
            <Col xs={12} md={6}>
              <Form.Group>
                <Form.Label>Grau de parentesco</Form.Label>
                <Form.Select className="input-field">
                  <option>Selecione o grau de parentesco</option>
                </Form.Select>
              </Form.Group>
            </Col>
            <Col xs={12} md={6}>
              <Form.Group>
                <Form.Label>Profissão</Form.Label>
                <Form.Control 
                  type="text" 
                  placeholder="Digite a profissão"
                  className="input-field"
                />
              </Form.Group>
            </Col>
          </Row>

          <Row className="mb-4">
            <Col xs={12} md={4}>
              <Form.Group>
                <Form.Label>Data de Nascimento</Form.Label>
                <Form.Control 
                  type="text" 
                  placeholder="00/00/00"
                  className="input-field"
                />
              </Form.Group>
            </Col>
            <Col xs={12} md={4}>
              <Form.Group>
                <Form.Label>E-mail</Form.Label>
                <Form.Control 
                  type="email" 
                  placeholder="Digite o e-mail"
                  className="input-field"
                />
              </Form.Group>
            </Col>
            <Col xs={12} md={4}>
              <Form.Group>
                <Form.Label>Telefone do trabalho</Form.Label>
                <Form.Control 
                  type="text" 
                  placeholder="(00) 0 0000-0000"
                  className="input-field"
                />
              </Form.Group>
            </Col>
          </Row>
        </div>

        <Row className="mb-4">
          <Col xs={12}>
            <Form.Group>
              <Form.Label>Observações</Form.Label>
              <Form.Control 
                as="textarea" 
                rows={4}
                placeholder="Digite as observações dos responsáveis..."
                className="input-field"
              />
            </Form.Group>
          </Col>
        </Row>

        <Row className="mb-4">
          <Col xs={12} md={4}>
            <Form.Group>
              <Form.Label>Renda Familiar R$</Form.Label>
              <Form.Control 
                type="text" 
                placeholder="Digite a renda"
                className="input-field"
              />
            </Form.Group>
          </Col>
        </Row>

        <Row className="mt-4">
          <Col className="d-flex justify-content-end">
            <Button variant="secondary" className="me-2 btn-cancelar">
              Cancelar
            </Button>
            <Button variant="primary" className="btn-avancar">
              Avançar
            </Button>
          </Col>
        </Row>
      </Form>
    </div>
  );
};

export default CadastroPraticante1;