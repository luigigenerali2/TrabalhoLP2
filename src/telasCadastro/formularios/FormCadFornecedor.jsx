import { useState } from "react";
import { Button, Container, Form, Row, Col, FloatingLabel } from "react-bootstrap";

export default function FormCadFornecedor(props) {
  const estadoInicialFornecedor = props.fornecedorParaEdicao;
  const [fornecedor, setFornecedor] = useState(estadoInicialFornecedor);
  const [formValidado, setFormValidado] = useState(false);

  function manipularMudancas(e) {
    const componente = e.currentTarget;
    setFornecedor({ ...fornecedor, [componente.name]: componente.value });
  }

  function manipularSubmissao(e) {
    const form = e.currentTarget;
    if (form.checkValidity()) {
      if (!props.modoEdicao) {
        props.setListaFornecedores([...props.listaFornecedores, fornecedor]);
      } else {
        props.setListaFornecedores([...props.listaFornecedores.filter((itemFornecedor) => itemFornecedor.cnpj !== fornecedor.cnpj), fornecedor]);
        props.setModoEdicao(false);
        props.setFornecedorParaEdicao({ cnpj: '', nome: '', email: '', telefone: '', categoria: '' });
      }
      setFornecedor({ cnpj: '', nome: '', email: '', telefone: '', categoria: '' });
      setFormValidado(false);
    } else {
      setFormValidado(true);
    }
    e.stopPropagation();
    e.preventDefault();
  }

  return (
    <Container>
      <Form noValidate validated={formValidado} onSubmit={manipularSubmissao}>
        <Row>
          <Col>
            <Form.Group>
              <FloatingLabel label="CNPJ:" className="mb-3">
                <Form.Control
                  type="text"
                  placeholder="00.000.000/0000-00"
                  id="cnpj"
                  name="cnpj"
                  value={fornecedor.cnpj}
                  onChange={manipularMudancas}
                  required
                />
              </FloatingLabel>
              <Form.Control.Feedback type="invalid">Informe o CNPJ!</Form.Control.Feedback>
            </Form.Group>
          </Col>
        </Row>
        <Row>
          <Col>
            <Form.Group>
              <FloatingLabel label="Nome do Fornecedor:" className="mb-3">
                <Form.Control
                  type="text"
                  placeholder="Informe o nome do fornecedor"
                  id="nome"
                  name="nome"
                  value={fornecedor.nome}
                  onChange={manipularMudancas}
                  required
                />
              </FloatingLabel>
              <Form.Control.Feedback type="invalid">Informe o nome do fornecedor!</Form.Control.Feedback>
            </Form.Group>
          </Col>
        </Row>
        <Row>
          <Col>
            <Form.Group>
              <FloatingLabel label="Email:" className="mb-3">
                <Form.Control
                  type="text"
                  placeholder="Informe o email do fornecedor"
                  id="email"
                  name="email"
                  value={fornecedor.email}
                  onChange={manipularMudancas}
                  required
                />
              </FloatingLabel>
              <Form.Control.Feedback type="invalid">Informe o email do fornecedor!</Form.Control.Feedback>
            </Form.Group>
          </Col>
        </Row>
        <Row>
          <Col>
            <Form.Group>
              <FloatingLabel label="Telefone:" className="mb-3">
                <Form.Control
                  type="text"
                  placeholder="(00) 0000-0000"
                  id="telefone"
                  name="telefone"
                  value={fornecedor.telefone}
                  onChange={manipularMudancas}
                  required
                />
              </FloatingLabel>
              <Form.Control.Feedback type="invalid">Informe o telefone do fornecedor!</Form.Control.Feedback>
            </Form.Group>
          </Col>
        </Row>
        <Row>
          <Col>
            <Form.Group>
              <FloatingLabel label="Categoria do Fornecedor:" className="mb-3">
                <Form.Control
                  type="text"
                  id="categoria"
                  name="categoria"
                  onChange={manipularMudancas}
                  value={fornecedor.categoria}
                  required
                />
              </FloatingLabel>
              <Form.Control.Feedback type="invalid">Informe a Categoria!</Form.Control.Feedback>
            </Form.Group>
          </Col>
        </Row>
        <Row>
          <Col md={6} offset={5} className="d-flex justify-content-end">
            <Button type="submit" variant={"primary"}>{props.modoEdicao ? "Alterar" : "Cadastrar"}</Button>
          </Col>
          <Col md={6} offset={5}>
            <Button type="button" variant={"secondary"} onClick={() => props.exibirFormulario(false)}>Voltar</Button>
          </Col>
        </Row>
      </Form>
    </Container>
  );
}
