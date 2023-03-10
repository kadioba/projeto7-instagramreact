import Story from "./Story"

export default function Stories() {

  const dadosStorys = [
    { imagem: "assets/img/9gag.svg", nome: "9gag" },
    { imagem: "assets/img/meowed.svg", nome: "meowed" },
    { imagem: "assets/img/barked.svg", nome: "barked" },
    { imagem: "assets/img/nathanwpylestrangeplanet.svg", nome: "nathanwpylestrangeplanet" },
    { imagem: "assets/img/wawawicomics.svg", nome: "wawawicomics" },
    { imagem: "assets/img/respondeai.svg", nome: "respondeai" },
    { imagem: "assets/img/filomoderna.svg", nome: "filomoderna" },
    { imagem: "assets/img/memeriagourmet.svg", nome: "memeriagourmet" }
  ]

  return (
    <div className="stories">

      {dadosStorys.map(dados => <Story key={dados.nome} nome={dados.nome} imagem={dados.imagem} />)}

      <div className="setinha">
        <ion-icon name="chevron-forward-circle"></ion-icon>
      </div>
    </div>)
}