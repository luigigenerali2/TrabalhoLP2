import { Button, Container, Table } from "react-bootstrap";

export default function TabelaProdutos(props) {
  function excluirProduto(produto) {
    if (window.confirm('Deseja realmente excluir este produto?')) {
      props.setListaProdutos(props.listaProdutos.filter((itemLista) => itemLista.idProduto !== produto.idProduto));
    }
  }

  function editarProduto(produto) {
    props.setProdutoParaEdicao(produto);
    props.setModoEdicao(true);
    props.exibirFormulario(true);
  }

  return (
    <Container>
      <Button type="button" onClick={() => props.exibirFormulario(true)}>Novo Produto</Button>
      <Table striped bordered hover>
        <thead>
          <tr>
            <th>ID do Produto</th>
            <th>Nome</th>
            <th>Descrição</th>
            <th>Quantidade</th>
            <th>Valor</th>
            <th>Fornecedor</th>
            <th>Categoria</th>
            <th>Ações</th>
          </tr>
        </thead>
        <tbody>
          {props.listaProdutos.map((produto) => (
            <tr key={produto.idProduto}>
              <td>{produto.idProduto}</td>
              <td>{produto.nome}</td>
              <td>{produto.descricao}</td>
              <td>{produto.quantidade}</td>
              <td>{produto.valor}</td>
              <td>{produto.fornecedor}</td>
              <td>{produto.categoria}</td>
              <td>
                <Button variant="danger" onClick={() => excluirProduto(produto)}>
                  Excluir
                </Button>{' '}
                <Button variant="warning" onClick={() => editarProduto(produto)}>
                  Editar
                </Button>
              </td>
            </tr>
          ))}
        </tbody>
      </Table>
    </Container>
  );
}
