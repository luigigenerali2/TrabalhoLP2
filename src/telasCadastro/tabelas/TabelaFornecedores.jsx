import { Button, Container, Table } from "react-bootstrap";

export default function TabelaFornecedores(props) {
  function excluirFornecedor(fornecedor) {
    if (window.confirm('Deseja realmente excluir este fornecedor?')) {
      props.setListaFornecedores(props.listaFornecedores.filter((itemLista) => itemLista.cnpj !== fornecedor.cnpj));
    }
  }

  function editarFornecedor(fornecedor) {
    props.setFornecedorParaEdicao(fornecedor);
    props.setModoEdicao(true);
    props.exibirFormulario(true);
  }

  return (
    <Container>
      <Button type="button" onClick={() => props.exibirFormulario(true)}>Novo Fornecedor</Button>
      <Table striped bordered hover>
        <thead>
          <tr>
            <th>CNPJ</th>
            <th>Nome</th>
            <th>Email</th>
            <th>Telefone</th>
            <th>Categoria</th>
            <th>Ações</th>
          </tr>
        </thead>
        <tbody>
          {props.listaFornecedores.map((fornecedor) => (
            <tr key={fornecedor.cnpj}>
              <td>{fornecedor.cnpj}</td>
              <td>{fornecedor.nome}</td>
              <td>{fornecedor.email}</td>
              <td>{fornecedor.telefone}</td>
              <td>{fornecedor.categoria}</td>
              <td>
                <Button variant="danger" onClick={() => excluirFornecedor(fornecedor)}>
                  Excluir
                </Button>{' '}
                <Button variant="warning" onClick={() => editarFornecedor(fornecedor)}>
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
