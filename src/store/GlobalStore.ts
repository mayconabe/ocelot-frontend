import Vue from 'vue'
import Vuex from 'vuex'
import Perfil from '../models/Perfil'
import { Module, VuexModule, Mutation, Action } from 'vuex-module-decorators'
import PerfilService from '@/services/PerfilService'

Vue.use(Vuex)

@Module({ name: 'GlobalStore', namespaced: true })
export default class GlobalStore extends VuexModule {

  // Estado
  _perfil = new Perfil(null)

  // Getters
  get perfil() {
    return this._perfil
  }

  @Mutation
  _initPerfil(perfil: Perfil) {
    this._perfil.clone(perfil)
  }

  @Action({ commit: '_initPerfil' })
  initPerfil() {
    return PerfilService.getPerfil() 
  }
}