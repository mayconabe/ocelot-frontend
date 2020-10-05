import Perfil from '../models/Perfil'

export default class PerfilService {

    static getPerfil() {
        //Esse método deveria ir no backend
        const perfilJson = {
            'username': 'Maycon',
            'url': '/img/logo.82b9c7a5.png'
        }

        return new Perfil(perfilJson)
    }

}