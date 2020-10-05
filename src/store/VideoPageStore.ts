import Perfil from '../models/Video'
import { Module, VuexModule, Mutation, Action } from 'vuex-module-decorators'
import PerfilService from '@/services/VideoService'

@Module({ name: 'VideoPageStore', namespaced: true })
export default class VideoPageStore extends VuexModule {
    
}