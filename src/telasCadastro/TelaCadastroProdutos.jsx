import { Container } from "react-bootstrap";
import Pagina from "../templates/Pagina";
import FormCadProduto from "./formularios/FormCadProduto";
import TabelaProdutos from "./tabelas/TabelaProdutos";
import { useState } from "react";

export default function TelaCadastroProduto() {
  const [exibirFormulario, setExibirFormulario] = useState(false);
  const [listaProdutos, setListaProdutos] = useState([]);
  const [produtoParaEdicao, setProdutoParaEdicao] = useState({
    idProduto: '',
    nome: '',
    descricao: '',
    quantidade: 0,
    valor: 0,
    fornecedor: '',
    categoria: ''
  });
  const [modoEdicao, setModoEdicao] = useState(false);

  return (
    <Container>
      <Pagina>
        {exibirFormulario ? (
          <FormCadProduto
            exibirFormulario={setExibirFormulario}
            listaProdutos={listaProdutos}
            setListaProdutos={setListaProdutos}
            produtoParaEdicao={produtoParaEdicao}
            setProdutoParaEdicao={setProdutoParaEdicao}
            modoEdicao={modoEdicao}
            setModoEdicao={setModoEdicao}
          />
        ) : (
          <TabelaProdutos
            exibirFormulario={setExibirFormulario}
            listaProdutos={listaProdutos}
            setListaProdutos={setListaProdutos}
            produtoParaEdicao={produtoParaEdicao}
            setProdutoParaEdicao={setProdutoParaEdicao}
            modoEdicao={modoEdicao}
            setModoEdicao={setModoEdicao}
          />
        )}
      </Pagina>
    </Container>
  );
}
