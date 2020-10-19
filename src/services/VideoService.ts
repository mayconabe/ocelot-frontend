import Video from '../models/Video'

export default class VideoService {

    static url: string = 'http://localhost:8000/api/index'

    static getAll() {
        //Esse método deveria ir no backend
        const videoJson = {
            'nome': 'Vídeo',
            'video_url': 'https://www.youtube.com/embed/qmN1Gf8rRc8',
            'video_thumbnail': 'https://i.ytimg.com/vi/qmN1Gf8rRc8/maxresdefault.jpg',
            'video_poster': ''
        }

        return [new Video(videoJson), new Video(videoJson), new Video(videoJson), new Video(videoJson), new Video(videoJson)]
        
    }

    static async getVideosIndex(): Promise<Array<Video>> {
        
        let videos = new Array<Video>()

        const response = await fetch(this.url)
        const data = await response.json()
        console.log('data')
        console.log(data)

        console.log(data)

        for (let i=0; i<data.length; i++) {
            videos.push(new Video(data[i]))
        }
        return videos
    }
}