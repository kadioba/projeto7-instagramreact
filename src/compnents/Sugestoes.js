import Sugestao from "./Sugestao";

export default function Sugestoes() {

    const dadosSugestao = [
        { nome: "bad.vibes.memes", imagem: "assets/img/bad.vibes.memes.svg", razao: "Segue você" },
        { nome: "chibirdart", imagem: "assets/img/chibirdart.svg", razao: "Segue você" },
        { nome: "razoesparaacreditar", imagem: "assets/img/razoesparaacreditar.svg", razao: "Novo no Instagram" },
        { nome: "adorable_animals", imagem: "assets/img/adorable_animals.svg", razao: "Segue você" },
        { nome: "smallcutecats", imagem: "assets/img/smallcutecats.svg", razao: "Segue você" },

    ]

    return (
        <div class="sugestoes">
            <div class="titulo">
                Sugestões para você
                <div>Ver tudo</div>
            </div>

            {dadosSugestao.map(dado => <Sugestao nome={dado.nome} imagem={dado.imagem} razao={dado.razao} />)}

        </div>
    )
}