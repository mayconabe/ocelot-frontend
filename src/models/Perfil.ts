export default class Perfil {

    username: string
    url: string

    constructor(perfilJson: any) {

        if (perfilJson == null) {
            this.username = "Visitante"
            this.url = "https://image.flaticon.com/icons/png/512/61/61205.png"
        } else {
            this.username = perfilJson.username
            this.url = perfilJson.url
        }
    }

    toJson() {
        return {
            'username': this.username,
            'url': this.url
        }
    }

    clone(perfilToClone: Perfil) {
        this.username = perfilToClone.username
        this.url = perfilToClone.url
    }

}

