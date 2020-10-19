import { settings } from '@/settings'

export default class Video {

    id: number
    nome: string
    descricao: string
    external_url: string
    thumbnail_url: string 

    constructor(videoJson: any) {
        if (videoJson == null) {
            this.id = 0
            this.nome = "Titulo"
            this.descricao = ""
            this.external_url = ""
            this.thumbnail_url = ""
        } else {
            this.id = videoJson.id
            this.nome = videoJson.nome
            this.descricao = videoJson.descricao
            this.external_url = videoJson.external_url
            this.thumbnail_url = settings.apiUrl + videoJson.thumbnail_url
        }
    }
}