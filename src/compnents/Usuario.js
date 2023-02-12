export default function Usuario(props) {




    return (
        <div class="usuario">
            <img src={props.imagem} alt="imagem de perfil" onClick={props.funcaoTrocaImagem} data-test="profile-image" />
            <div class="texto">
                <span>
                    <strong data-test="name">{props.nome}</strong>
                    <ion-icon name="pencil" onClick={props.funcaoTrocaNome} data-test="edit-name"></ion-icon>
                </span>
            </div>
        </div>
    )
}