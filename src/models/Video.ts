export default class Video{
    nome : string
    video_url : string
    video_thumb : string
    video_poster : string

    constructor(videoJson: any){
        if (videoJson == null){
            this.nome = ''
            this.video_url = ''
            this.video_thumb = ''
            this.video_poster = ''
        } else {
            this.nome = videoJson.nome
            this.video_url = videoJson.video_url
            this.video_thumb = 'http://localhost:8000'+videoJson.thumbnail_url
            this.video_poster = 'http://localhost:8000'+videoJson.poster_url
        }
    }
}