import Sugestoes from "./Sugestoes";
import Usuario from "./Usuario";
import { useState } from "react"

export default function SideBar() {

    const imagemPerfilInicial = "assets/img/catanacomics.svg";
    const [imagemPerfil, setImagemPerfil] = useState(imagemPerfilInicial);
    const nomePerfilInicial = "catanacomics";
    const [nomePerfil, setNomePerfil] = useState(nomePerfilInicial)

    function trocarImagemPerfil() {
        const novaImagemPerfil = prompt("Insira o link da sua nova foto.");
        if (novaImagemPerfil !== "") {
            setImagemPerfil(novaImagemPerfil);
        }
    }

    function trocarNomePerfil() {
        const novoNomePerfil = prompt("Digite seu novo nome de perfil.");
        if (novoNomePerfil !== "") {
            setNomePerfil(novoNomePerfil);
        }
    }

    return (
        <div class="sidebar">

            <Usuario imagem={imagemPerfil} nome={nomePerfil} funcaoTrocaImagem={trocarImagemPerfil} funcaoTrocaNome={trocarNomePerfil} />

            <Sugestoes />

            <div class="links">
                Sobre • Ajuda • Imprensa • API • Carreiras • Privacidade • Termos • Localizações • Contas mais relevantes •
                Hashtags • Idioma
            </div>

            <div class="copyright">
                © 2021 INSTAGRAM DO FACEBOOK
            </div>
        </div>
    )
}