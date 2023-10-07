import { Container } from "react-bootstrap";
import Pagina from "../templates/Pagina";
import FormCadCategoria from "./formularios/FormCadCategorias"
import TabelaCategorias from "./tabelas/TabelaCategorias";
import { useState } from "react";

export default function TelaCadastroCategoria() {
  const [exibirFormulario, setExibirFormulario] = useState(false);
  const [listaCategorias, setListaCategorias] = useState([]);
  const [categoriaParaEdicao, setCategoriaParaEdicao] = useState({ idCategoria: '', nome: '' });
  const [modoEdicao, setModoEdicao] = useState(false);

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
