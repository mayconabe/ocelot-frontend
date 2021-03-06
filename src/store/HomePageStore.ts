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
        if (this._listaDeVideos.length > 0){
            return this._listaDeVideos.slice(1)
        } else {
            return new Video(null)
        }
        
    }

    get getVideos(){
        if (this._listaDeVideos.length > 0){
            return this._listaDeVideos
        } else {
            return [new Video(null)]
        }
    }

    //Mutation
    @Mutation
    _initVideos(videos: Array<Video>){
        console.log('mutation')
        this._listaDeVideos = videos
    }

    //Action
    @Action({commit: '_initVideos'})
    initVideos() {
        console.log('action')
        return VideoService.getVideosIndex()
    }
}
