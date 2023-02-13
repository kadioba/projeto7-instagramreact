import Post from "./Post";

export default function Posts() {

    const dadosPosts = [
        { imgUsr: "assets/img/meowed.svg", nomeUsr: "meowed", imgConteudo: "assets/img/gato-telefone.svg", imgCurtidas: "assets/img/respondeai.svg", nomeCurtiu: "respondeai", curtidas: 101523 },
        { imgUsr: "assets/img/barked.svg", nomeUsr: "barked", imgConteudo: "assets/img/dog.svg", imgCurtidas: "assets/img/adorable_animals.svg", nomeCurtiu: "adorable_animals", curtidas: 99159 },
        { imgUsr: "assets/img/logo-uol-icon-1024.png", nomeUsr: "uol", imgConteudo: "assets/img/castelo.png", imgCurtidas: "assets/img/buzzfeed.png", nomeCurtiu: "buzz_feed", curtidas: 1359 }
    ];

    return (
        <div className="posts">

            {dadosPosts.map(dado => <Post
                key={dado.imgConteudo}
                imgUsr={dado.imgUsr}
                nomeUsr={dado.nomeUsr}
                imgConteudo={dado.imgConteudo}
                imgCurtidas={dado.imgCurtidas}
                nomeCurtiu={dado.nomeCurtiu}
                curtidas={dado.curtidas} />)}

        </div>
    )
}