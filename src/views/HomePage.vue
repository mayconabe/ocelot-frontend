<template>
  <div class="home">
    <b-row no-gutters>
      <b-col>
        <VideoComponent :video="videoPrincipal"/>
        <VideosEmDestaqueComponent :listaVideos="videosEmDestaque" orientacao="horizontal"/>
        <RodapeComponent/>
      </b-col>
    </b-row>
  </div>
</template>

<script lang="ts">
import { Component, Vue } from 'vue-property-decorator';
import { getModule } from 'vuex-module-decorators'

import ProfilePhotoComponent from '@/components/ProfilePhotoComponent.vue'; // @ is an alias to /src
import VideoComponent from '@/components/VideoComponent.vue';
import VideosEmDestaqueComponent from '@/components/VideosEmDestaqueComponent.vue';
import RecomendadoComponent from '@/components/RecomendadoComponent.vue';
import RodapeComponent from '@/components/RodapeComponent.vue';

import HomePageStore from '../store/HomePageStore'

@Component({
  components: {
    ProfilePhotoComponent,
    VideoComponent,
    VideosEmDestaqueComponent,
    RecomendadoComponent,
    RodapeComponent,
  },
})
export default class HomePage extends Vue {

  homePageStore = getModule(HomePageStore, this.$store)

  get videoPrincipal(){
    return this.homePageStore.videoPrincipal
    
  }

  get videosEmDestaque() {
    return this.homePageStore.videosEmDestaque
  }
  
}
</script>

<style lang="scss" scoped>


</style>
