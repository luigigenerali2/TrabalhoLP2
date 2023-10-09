import Cabecalho from "./Cabecalho";
import Rodape from "./Rodape";
import Menu from "./Menu";

export default function Pagina(props) {
    return (
        <>
            <Cabecalho conteudo='Sistema de Gestão Comercial' />
            <Menu />
            <div>
                {
                    // filhos da página
                }
                {props.children} 
            </div>
            <Rodape conteudo="Rua Avenida Paulista, 235 - Vila Santa Rosa - Presidente Prudente/SP - CNPJ 23.358.120/0001-00"/>
        </>
    )
}

