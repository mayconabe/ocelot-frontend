import Vue from 'vue'
import Vuex from 'vuex'

import GlobalStore from "../store/GlobalStore"
import UIStore from "../store/UIStore"
import HomePageStore from "../store/HomePageStore"
import VideoPageStore from "../store/VideoPageStore"

Vue.use(Vuex)

export default new Vuex.Store({
  modules: {
    GlobalStore,
    UIStore,
    HomePageStore,
    VideoPageStore
  }
})
