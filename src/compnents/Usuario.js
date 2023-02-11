export default function Usuario(props) {
    return (
        <div class="usuario">
            <img src={props.imagem} alt="imagem de perfil" />
            <div class="texto">
                <span>
                    <strong>{props.nome}</strong>
                    <ion-icon name="pencil"></ion-icon>
                </span>
            </div>
        </div>
    )
}