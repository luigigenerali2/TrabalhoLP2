import { Button, Container, Table } from "react-bootstrap";

export default function TabelaClientes(props) {
    function excluirCliente(cliente) {
        if (window.confirm('Deseja realmente excluir esse cliente?')) {
            props.setListaClientes(
                props.listaClientes.filter((itemLista => itemLista.cpf !== cliente.cpf))
            );
        }
    }
    function editarCliente(cliente){
        props.setClienteParaEdicao(cliente);
        props.setModoEdicao(true);
        props.exibirFormulario(true);
    }
    return (
        <Container>
            <Button type="button" onClick={() => {
                props.exibirFormulario(true);
            }}>Novo Cliente</Button>
            <Table striped bordered hover>
                <thead>
                    <tr>
                        <th>CPF</th>
                        <th>Nome</th>
                        <th>Endereço/Nº</th>
                        <th>Bairro</th>
                        <th>Cidade/UF</th>
                        <th>CEP</th>
                        <th>Ações</th>
                    </tr>
                </thead>
                <tbody>
                    {
                        props.listaClientes.map((cliente) => {
                            return (<tr key={cliente.cpf}>
                                <td>{cliente.cpf}</td>
                                <td>{cliente.nome}</td>
                                <td>{cliente.endereco + ", n " + cliente.numero}</td>
                                <td>{cliente.bairro}</td>
                                <td>`{cliente.cidade}/{cliente.uf}`</td>
                                <td>{cliente.cep}</td>
                                <td>
                                    <Button variant="danger" onClick={() => 
                                        excluirCliente(cliente)
                                    }>
                                        Excluir
                                    </Button> {' '}
                                    <Button variant="warning" onClick={() => 
                                        editarCliente(cliente)
                                    }>
                                        Editar
                                    </Button>
                                </td>
                            </tr>)
                        })
                    }
                </tbody>
            </Table>
        </Container>
    );
}