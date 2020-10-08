import Vue from 'vue'
import Vuex from 'vuex'

import GlobalStore from './GlobalStore'
import HomePageStore from './HomePageStore'
import UIStore from './UIStore'
import VideoPageStore from './VideoPageStore'

Vue.use(Vuex)


export default new Vuex.Store({ 
    modules:{
      GlobalStore,
      UIStore,
      VideoPageStore,
      HomePageStore
    }
  })
