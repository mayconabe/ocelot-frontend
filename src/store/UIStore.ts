import Vue from 'vue'
import Vuex from 'vuex'
import { Module, VuexModule, Mutation, Action } from 'vuex-module-decorators'

Vue.use(Vuex)


@Module({ name: 'UIStore', namespaced: true })
export default class UIStore extends VuexModule {
  _teste = 5

  get teste() {
    return this._teste
  }
}