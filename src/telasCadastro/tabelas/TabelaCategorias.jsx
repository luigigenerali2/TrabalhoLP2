import { Button, Container, Table } from "react-bootstrap";

export default function TabelaCategorias(props) {
  function excluirCategoria(categoria) {
    if (window.confirm('Deseja realmente excluir esta categoria?')) {
      props.setListaCategorias(props.listaCategorias.filter((itemLista) => itemLista.idCategoria !== categoria.idCategoria));
    }
  }

  function editarCategoria(categoria) {
    props.setCategoriaParaEdicao(categoria);
    props.setModoEdicao(true);
    props.exibirFormulario(true);
  }

  return (
    <Container>
      <Button type="button" onClick={() => props.exibirFormulario(true)}>Nova Categoria</Button>
      <Table striped bordered hover>
        <thead>
          <tr>
            <th>ID da Categoria</th>
            <th>Nome da Categoria</th>
            <th>Ações</th>
          </tr>
        </thead>
        <tbody>
          {props.listaCategorias.map((categoria) => (
            <tr key={categoria.idCategoria}>
              <td>{categoria.idCategoria}</td>
              <td>{categoria.nome}</td>
              <td>
                <Button variant="danger" onClick={() => excluirCategoria(categoria)}>
                  Excluir
                </Button>{' '}
                <Button variant="warning" onClick={() => editarCategoria(categoria)}>
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
