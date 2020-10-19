<template>
    <b-row no-gutters>
        <b-col sm="12" md="9">
            <div class="video">
                <VideoComponent :video="video"/>
            </div>
        </b-col>
        <b-col sm="12" md="3">
            <VideosEmDestaqueComponent :listaVideos="videosRelacionados"
                                       :titulo="titulo"
                                       orientacao="vertical"/>
        </b-col>
    </b-row>

</template>

<script lang="ts">
import { Component, Vue, Prop } from 'vue-property-decorator';
import { getModule } from 'vuex-module-decorators'
import VideoComponent from '@/components/VideoComponent.vue';
import HomePageStore from '../store/HomePageStore'

import Video from '../models/Video'

import VideosEmDestaqueComponent from '@/components/VideosEmDestaqueComponent.vue';

@Component({
  components: {
    VideoComponent,
    VideosEmDestaqueComponent,
  },
})
export default class VideoPage extends Vue {

    @Prop() private videoId!: number

    homePageStore = getModule(HomePageStore, this.$store)
    titulo = "Vídeos Relacionados"


    get video() {
        let videosFiltrados = this.homePageStore.getVideos.filter(v => this.videoId == v.id)

        if (videosFiltrados.length > 0) {

            return videosFiltrados[0]
        } else {
            return new Video(null)
        }

    }
    get videosRelacionados() {
        return this.homePageStore.videosEmDestaque
    }
  
}
</script>

<style lang="scss" scoped>

</style>