import Post from "./Post";

export default function Posts() {

    const dadosPosts = [
        { imgUsr: "assets/img/meowed.svg", nomeUsr: "meowed", imgConteudo: "assets/img/gato-telefone.svg", imgCurtidas: "assets/img/respondeai.svg", nomeCurtiu: "respondeai", numeroCurtidas: 101.523 },
        { imgUsr: "assets/img/barked.svg", nomeUsr: "barked", imgConteudo: "assets/img/dog.svg", imgCurtidas: "assets/img/adorable_animals.svg", nomeCurtiu: "adorable_animals", numeroCurtidas: 99.159 }
    ];

    return (
        <div class="posts">

            {dadosPosts.map(dado => <Post
                imgUsr={dado.imgUsr}
                nomeUsr={dado.nomeUsr}
                imgConteudo={dado.imgConteudo}
                imgCurtidas={dado.imgCurtidas}
                nomeCurtiu={dado.nomeCurtiu}
                numeroCurtidas={dado.numeroCurtidas} />)}

            <div class="post">
                <div class="topo">
                    <div class="usuario">
                        <img src="assets/img/meowed.svg" alt="meowed" />
                        meowed
                    </div>
                    <div class="acoes">
                        <ion-icon name="ellipsis-horizontal"></ion-icon>
                    </div>
                </div>

                <div class="conteudo">
                    <img src="assets/img/gato-telefone.svg" alt="gato-telefone" />
                </div>

                <div class="fundo">
                    <div class="acoes">
                        <div>
                            <ion-icon name="heart-outline"></ion-icon>
                            <ion-icon name="chatbubble-outline"></ion-icon>
                            <ion-icon name="paper-plane-outline"></ion-icon>
                        </div>
                        <div>
                            <ion-icon name="bookmark-outline"></ion-icon>
                        </div>
                    </div>

                    <div class="curtidas">
                        <img src="assets/img/respondeai.svg" alt="respondeai" />
                        <div class="texto">
                            Curtido por <strong>respondeai</strong> e <strong>outras 101.523 pessoas</strong>
                        </div>
                    </div>
                </div>
            </div>

            <div class="post">
                <div class="topo">
                    <div class="usuario">
                        <img src="assets/img/barked.svg" alt="barked" />
                        barked
                    </div>
                    <div class="acoes">
                        <ion-icon name="ellipsis-horizontal"></ion-icon>
                    </div>
                </div>

                <div class="conteudo">
                    <img src="assets/img/dog.svg" alt="dog" />
                </div>

                <div class="fundo">
                    <div class="acoes">
                        <div>
                            <ion-icon name="heart-outline"></ion-icon>
                            <ion-icon name="chatbubble-outline"></ion-icon>
                            <ion-icon name="paper-plane-outline"></ion-icon>
                        </div>
                        <div>
                            <ion-icon name="bookmark-outline"></ion-icon>
                        </div>
                    </div>

                    <div class="curtidas">
                        <img src="assets/img/adorable_animals.svg" alt="adorable_animals" />
                        <div class="texto">
                            Curtido por <strong>adorable_animals</strong> e <strong>outras 99.159 pessoas</strong>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}