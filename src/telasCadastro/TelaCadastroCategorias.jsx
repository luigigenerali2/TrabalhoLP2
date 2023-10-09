import { Container } from "react-bootstrap";
import Pagina from "../templates/Pagina";
import FormCadCategoria from "./formularios/FormCadCategorias"
import TabelaCategorias from "./tabelas/TabelaCategorias";
import { useState } from "react";
import TelaMensagem from "./TelaMensagem";

export default function TelaCadastroCategoria() {
  const [exibirFormulario, setExibirFormulario] = useState(false);
  const [listaCategorias, setListaCategorias] = useState([]);
  const [categoriaParaEdicao, setCategoriaParaEdicao] = useState({ idCategoria: '', nome: '' });
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
          <FormCadCategoria
            exibirFormulario={setExibirFormulario}
            listaCategorias={listaCategorias}
            setListaCategorias={setListaCategorias}
            categoriaParaEdicao={categoriaParaEdicao}
            setCategoriaParaEdicao={setCategoriaParaEdicao}
            modoEdicao={modoEdicao}
            setModoEdicao={setModoEdicao}
          />
        ) : (
          <TabelaCategorias
            exibirFormulario={setExibirFormulario}
            listaCategorias={listaCategorias}
            setListaCategorias={setListaCategorias}
            categoriaParaEdicao={categoriaParaEdicao}
            setCategoriaParaEdicao={setCategoriaParaEdicao}
            modoEdicao={modoEdicao}
            setModoEdicao={setModoEdicao}
          />
        )}
      </Pagina>
    </Container>
  );
}
