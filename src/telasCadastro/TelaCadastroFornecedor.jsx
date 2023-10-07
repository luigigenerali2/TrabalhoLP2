// components/TelaCadastroFornecedor.jsx
import { Container } from "react-bootstrap";
import Pagina from "../templates/Pagina";
import FormCadFornecedor from "./formularios/FormCadFornecedor";
import TabelaFornecedores from "./tabelas/TabelaFornecedores";
import { useState } from "react";

export default function TelaCadastroFornecedor() {
  const [exibirFormulario, setExibirFormulario] = useState(false);
  const [listaFornecedores, setListaFornecedores] = useState([]);
  const [fornecedorParaEdicao, setFornecedorParaEdicao] = useState({ cnpj: '', nome: '', email: '', telefone: '', categoria: '' });
  const [modoEdicao, setModoEdicao] = useState(false);

  return (
    <Container>
      <Pagina>
        {exibirFormulario ? (
          <FormCadFornecedor
            exibirFormulario={setExibirFormulario}
            listaFornecedores={listaFornecedores}
            setListaFornecedores={setListaFornecedores}
            fornecedorParaEdicao={fornecedorParaEdicao}
            setFornecedorParaEdicao={setFornecedorParaEdicao}
            modoEdicao={modoEdicao}
            setModoEdicao={setModoEdicao}
          />
        ) : (
          <TabelaFornecedores
            exibirFormulario={setExibirFormulario}
            listaFornecedores={listaFornecedores}
            setListaFornecedores={setListaFornecedores}
            fornecedorParaEdicao={fornecedorParaEdicao}
            setFornecedorParaEdicao={setFornecedorParaEdicao}
            modoEdicao={modoEdicao}
            setModoEdicao={setModoEdicao}
          />
        )}
      </Pagina>
    </Container>
  );
}
