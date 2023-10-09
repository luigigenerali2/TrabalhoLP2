// components/TelaCadastroFornecedor.jsx
import { Container } from "react-bootstrap";
import Pagina from "../templates/Pagina";
import FormCadFornecedor from "./formularios/FormCadFornecedor";
import TabelaFornecedores from "./tabelas/TabelaFornecedores";
import { useState } from "react";
import TelaMensagem from "./TelaMensagem";

export default function TelaCadastroFornecedor() {
  const [exibirFormulario, setExibirFormulario] = useState(false);
  const [listaFornecedores, setListaFornecedores] = useState([]);
  const [fornecedorParaEdicao, setFornecedorParaEdicao] = useState({ cnpj: '', nome: '', email: '', telefone: '', categoria: '' });
  const [modoEdicao, setModoEdicao] = useState(false);
  const [mostrarMensagem, setMostrarMensagem] = useState(false);
  const [mensagem, setMensagem] = useState("");
  const [tipoMensagem, setTipoMensagem] = useState("");
  if (mostrarMensagem) {
    return (
        <TelaMensagem mensagem={mensagem} tipo={tipoMensagem} setMostrarMensagem={setMostrarMensagem}/>
    )
}
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
            setMostrarMensagem={setMostrarMensagem}
            setMensagem={setMensagem}
            setTipoMensagem={setTipoMensagem}
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
