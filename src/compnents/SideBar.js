import Sugestoes from "./Sugestoes";
import Usuario from "./Usuario";

export default function SideBar() {

    let imagemPerfil = "assets/img/catanacomics.svg";
    let nomePerfil = "catanacomics";

    return (
        <div class="sidebar">

            <Usuario imagem={imagemPerfil} nome={nomePerfil} />

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