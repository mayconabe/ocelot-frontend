import Vue from 'vue'
import Vuex from 'vuex'
import { Module, VuexModule, Mutation, Action } from 'vuex-module-decorators'
import VideoService from '@/services/VideoService'
import Video from '@/models/Video'

Vue.use(Vuex)

@Module({ name: 'HomePageStore', namespaced: true })
export default class HomePageStore extends VuexModule {

    _listaVideos = new Array<Video>() 

    get videoPrincipal() {
        if (this._listaVideos.length > 0) {
            return this._listaVideos[0]
        } else {
            return new Video(null)
        }
    }

    get videosEmDestaque() {
        return this._listaVideos.slice(1)
    }

    @Mutation
    _initVideos(videos: Array<Video>) {
      this._listaVideos = videos
    }
  
    @Action({ commit: '_initVideos' })
    initVideos() {
      return VideoService.getVideosIndex()
    }

}