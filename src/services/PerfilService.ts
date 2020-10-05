import Perfil from "../models/Perfil"

export default class PerfilService{
    static getPerfil() {
        const perfilJson = {
            'username': 'marleyabe',
            'url': 'https://image.flaticon.com/icons/png/512/61/61205.png'
        }

        return new Perfil(perfilJson)
    }
}