import {VuexModule, Mutation, Action, Module} from 'vuex-module-decorators'

@Module({name: 'UiStore', namespaced: true})
export default class UiStore extends VuexModule{
    //State
    _teste = 5
    //Getters
    get teste(){
        return this._teste
    }
    //Mutation

    //Action
}