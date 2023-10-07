import { useState } from "react";
import { Button, Container, Form, Row, Col, FloatingLabel } from "react-bootstrap";

export default function FormCadCategoria(props) {
  const estadoInicialCategoria = props.categoriaParaEdicao;
  const [categoria, setCategoria] = useState(estadoInicialCategoria);
  const [formValidado, setFormValidado] = useState(false);

  function manipularMudancas(e) {
    const componente = e.currentTarget;
    setCategoria({ ...categoria, [componente.name]: componente.value });
  }

  function manipularSubmissao(e) {
    const form = e.currentTarget;
    if (form.checkValidity()) {
      if (!props.modoEdicao) {
        props.setListaCategorias([...props.listaCategorias, categoria]);
      } else {
        // No modo de edição, mantenha o idCategoria original
        const categoriaAtualizada = { ...categoria, idCategoria: props.categoriaParaEdicao.idCategoria };
        props.setListaCategorias([...props.listaCategorias.filter((itemCategoria) => itemCategoria.idCategoria !== categoria.idCategoria), categoriaAtualizada]);
        props.setModoEdicao(false);
        props.setCategoriaParaEdicao({ idCategoria: '', nome: '' });
      }
      setCategoria({ idCategoria: '', nome: '' });
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
              <FloatingLabel label="ID da Categoria:" className="mb-3">
                <Form.Control
                  type="text"
                  placeholder="ID da Categoria"
                  id="idCategoria"
                  name="idCategoria"
                  value={categoria.idCategoria}
                  onChange={manipularMudancas}
                  required
                  disabled={props.modoEdicao} // Desabilita o campo no modo de edição
                />
              </FloatingLabel>
              <Form.Control.Feedback type="invalid">Informe o ID da Categoria!</Form.Control.Feedback>
            </Form.Group>
          </Col>
        </Row>
        <Row>
          <Col>
            <Form.Group>
              <FloatingLabel label="Nome da Categoria:" className="mb-3">
                <Form.Control
                  type="text"
                  placeholder="Informe o nome da categoria"
                  id="nome"
                  name="nome"
                  value={categoria.nome}
                  onChange={manipularMudancas}
                  required
                />
              </FloatingLabel>
              <Form.Control.Feedback type="invalid">Informe o nome da categoria!</Form.Control.Feedback>
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
