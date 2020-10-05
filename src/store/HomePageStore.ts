import {VuexModule, Mutation, Action, Module} from 'vuex-module-decorators'
import Video from "../models/Video"
import VideoService from "../services/VideoService"

@Module({name: 'HomePageStore', namespaced: true})
export default class HomePageStore extends VuexModule{
    //State

    _listaDeVideos = new Array<Video>()

    //Getters

    get videoPrincipal(){
        if (this._listaDeVideos.length > 0){
            return this._listaDeVideos[0]
        } else {
            return new Video(null)
        }
    }
    get videosEmDestaque(){
        return this._listaDeVideos.slice(1)
    }
    //Mutation
    @Mutation
    _initVideo(videos: Array<Video>){
        console.log('mutation')
        this._listaDeVideos = videos
    }

    //Action
    @Action({commit: '_initVideo'})
    initVideo() {
        console.log('action')
        return VideoService.getVideosIndex()
    }
}
