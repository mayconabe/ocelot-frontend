import Video from "../models/Video"

export default class VideoService{
    static getAll() {
        const videoJson = {
            'nome' : 'video teste',
            'video_url' : 'https://www.youtube.com/embed/qmN1Gf8rRc8',
            'video_thumb' : 'https://i.ytimg.com/vi/qmN1Gf8rRc8/maxresdefault.jpg',
            'video_poster' : '',
        }
        return [new Video(videoJson), new Video(videoJson), new Video(videoJson), new Video(videoJson), new Video(videoJson)]
    }
    static url: string = "http://localhost:8000/api/index/"

    static async getVideosIndex(): Promise<Array<Video>> {

        let videos = new Array<Video>()

        const response = await fetch(this.url)
        const data = await response.json()
        console.log('data', data)
        for(let i=0; i<data.length; i++){
            videos.push(new Video(data[i]))
        }
        
        return videos
    }
}