import { useState } from "react";
import { Button, Container, Form, Row, Col, FloatingLabel } from "react-bootstrap";

export default function FormCadProduto(props) {
  const estadoInicialProduto = props.produtoParaEdicao;
  const [produto, setProduto] = useState(estadoInicialProduto);
  const [formValidado, setFormValidado] = useState(false);

  function manipularMudancas(e) {
    const componente = e.currentTarget;
    setProduto({ ...produto, [componente.name]: componente.value });
  }

  function manipularSubmissao(e) {
    const form = e.currentTarget;
    if (form.checkValidity()) {
      if (!props.modoEdicao) {
        props.setListaProdutos([...props.listaProdutos, produto]);
      } else {
        props.setListaProdutos([...props.listaProdutos.filter((itemProduto) => itemProduto.idProduto !== produto.idProduto), produto]);
        props.setModoEdicao(false);
        props.setProdutoParaEdicao({ idProduto: '', nome: '', descricao: '', quantidade: 0, valor: 0, fornecedor: '', categoria: '' });
      }
      setProduto({ idProduto: '', nome: '', descricao: '', quantidade: 0, valor: 0, fornecedor: '', categoria: '' });
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
              <FloatingLabel label="ID do Produto:" className="mb-3">
                <Form.Control
                  type="text"
                  placeholder="ID do Produto"
                  id="idProduto"
                  name="idProduto"
                  value={produto.idProduto}
                  onChange={manipularMudancas}
                  required
                />
              </FloatingLabel>
              <Form.Control.Feedback type="invalid">Informe o ID do Produto!</Form.Control.Feedback>
            </Form.Group>
          </Col>
        </Row>
        <Row>
          <Col>
            <Form.Group>
              <FloatingLabel label="Nome do Produto:" className="mb-3">
                <Form.Control
                  type="text"
                  placeholder="Informe o nome do produto"
                  id="nome"
                  name="nome"
                  value={produto.nome}
                  onChange={manipularMudancas}
                  required
                />
              </FloatingLabel>
              <Form.Control.Feedback type="invalid">Informe o nome do produto!</Form.Control.Feedback>
            </Form.Group>
          </Col>
        </Row>
        <Row>
          <Col>
            <Form.Group>
              <FloatingLabel label="Descrição do Produto:" className="mb-3">
                <Form.Control
                  as="textarea"
                  placeholder="Informe a descrição do produto"
                  id="descricao"
                  name="descricao"
                  value={produto.descricao}
                  onChange={manipularMudancas}
                  required
                />
              </FloatingLabel>
              <Form.Control.Feedback type="invalid">Informe a descrição do produto!</Form.Control.Feedback>
            </Form.Group>
          </Col>
        </Row>
        <Row>
          <Col>
            <Form.Group>
              <FloatingLabel label="Quantidade:" className="mb-3">
                <Form.Control
                  type="number"
                  placeholder="Informe a quantidade"
                  id="quantidade"
                  name="quantidade"
                  value={produto.quantidade}
                  onChange={manipularMudancas}
                  required
                />
              </FloatingLabel>
              <Form.Control.Feedback type="invalid">Informe a quantidade!</Form.Control.Feedback>
            </Form.Group>
          </Col>
          <Col>
            <Form.Group>
              <FloatingLabel label="Valor:" className="mb-3">
                <Form.Control
                  type="number"
                  placeholder="Informe o valor"
                  id="valor"
                  name="valor"
                  value={produto.valor}
                  onChange={manipularMudancas}
                  required
                />
              </FloatingLabel>
              <Form.Control.Feedback type="invalid">Informe o valor!</Form.Control.Feedback>
            </Form.Group>
          </Col>
        </Row>
        <Row>
          <Col>
            <Form.Group>
              <FloatingLabel label="Fornecedor do Produto:" className="mb-3">
                <Form.Control
                  type="text"
                  id="fornecedor"
                  name="fornecedor"
                  onChange={manipularMudancas}
                  value={produto.fornecedor}
                  required
                />
              </FloatingLabel>
              <Form.Control.Feedback type="invalid">Informe o fornecedor!</Form.Control.Feedback>
            </Form.Group>
          </Col>
          <Col>
            <Form.Group>
              <FloatingLabel controlId="floatingSelectCategoria" label="Categoria do Produto:">
                <Form.Control
                  type="text"
                  id="categoria"
                  name="categoria"
                  onChange={manipularMudancas}
                  value={produto.categoria}
                  required
                />
              </FloatingLabel>
              <Form.Control.Feedback type="invalid">Informe o produto!</Form.Control.Feedback>
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
