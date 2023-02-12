import { useState } from "react";

export default function Post(props) {

    const [estadoBookmark, setBookmark] = useState("bookmark-outline");

    function salvarPost() {
        if (estadoBookmark === "bookmark-outline") {
            setBookmark("bookmark");
        }
        else if (estadoBookmark === "bookmark") {
            setBookmark("bookmark-outline");
        }
    }

    const curtidasInicial = props.curtidas;
    const [estadoCurtida, setCurtida] = useState("heart-outline");
    const [estadoClasseCurtida, setClasseCurtida] = useState("");
    const [numeroCurtidas, setNumeroCurtidas] = useState(curtidasInicial);
    const [estadoAnimacao, setAnimacao] = useState("like-animacao-escondido");

    function finalizarAnimacao() {
        setAnimacao("like-animacao-escondido");
    }

    function curtirPost() {
        if (estadoCurtida === "heart-outline") {
            setCurtida("heart");
            setClasseCurtida("curtido");
            setNumeroCurtidas(numeroCurtidas + 1);
            setAnimacao("like-animacao");
            setTimeout(finalizarAnimacao, 800);
        }
        else if (estadoCurtida === "heart") {
            setCurtida("heart-outline");
            setClasseCurtida("");
            setNumeroCurtidas(numeroCurtidas - 1)
        }
    }

    function curtirPostDoubleClick() {
        if (estadoCurtida === "heart-outline") {
            setCurtida("heart");
            setClasseCurtida("curtido");
            setNumeroCurtidas(numeroCurtidas + 1);
            setAnimacao("like-animacao");
            setTimeout(finalizarAnimacao, 800);
        }
    }

    return (
        <div class="post" data-test="post">
            <div class="topo">
                <div class="usuario">
                    <img src={props.imgUsr} alt={props.nomeUsr} />
                    {props.nomeUsr}
                </div>
                <div class="acoes">
                    <ion-icon name="ellipsis-horizontal"></ion-icon>
                </div>
            </div>

            <div class="conteudo">
                <img src={props.imgConteudo} alt="" onDoubleClick={curtirPostDoubleClick} data-test="post-image" />
                <ion-icon name="heart" class={estadoAnimacao} ></ion-icon>
            </div>

            <div class="fundo">
                <div class="acoes">
                    <div>
                        <ion-icon name={estadoCurtida} onClick={curtirPost} class={estadoClasseCurtida} data-test="like-post"></ion-icon>
                        <ion-icon name="chatbubble-outline"></ion-icon>
                        <ion-icon name="paper-plane-outline"></ion-icon>
                    </div>
                    <div>
                        <ion-icon name={estadoBookmark} onClick={salvarPost} data-test="save-post"></ion-icon>
                    </div>
                </div>

                <div class="curtidas">
                    <img src={props.imgCurtidas} alt={props.nomeCurtiu} />
                    <div class="texto">
                        Curtido por <strong>{props.nomeCurtiu}</strong> e <strong>outras <strong data-test="likes-number">{numeroCurtidas.toLocaleString('pt-BR', { minimumFractionDigits: 0, maximumFractionDigits: 0 })}</strong> pessoas</strong>
                    </div>
                </div>
            </div>
        </div >
    )
}