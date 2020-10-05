import {VuexModule, Mutation, Action, Module} from 'vuex-module-decorators'
import Perfil from "../models/Perfil"
import PerfilService from "../services/PerfilService"

@Module({name: 'GlobalStore', namespaced: true })
export default class GlobalStore extends VuexModule{
    //State
    _perfil = new Perfil(null)
    _teste = 6

    //getters
    get perfil(){
        return this._perfil
    }

    get teste(){
        return this._teste
    }

    //Mutation
    @Mutation
    _initPerfil(perfil: Perfil){
        this._perfil.clone(perfil)        
    }

    //Action
    @Action({commit: '_initPerfil'})
    initPerfil(){
        return PerfilService.getPerfil()
    }
}