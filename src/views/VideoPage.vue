<template>
  <div class="video">
    <b-row no-gutters>
        <b-col sm="12" md="9" >
            <VideoComponent :video="video"/>
        </b-col>
            
        <b-col sm="12" md="3">
            <VideosEmDestaqueComponent :listaVideos="videoRelacionados"
                                        :titulo="titulo"
                                        orientacao="vertical"/>
        </b-col>
    </b-row>
  </div>
</template>

<script lang="ts">
import { Component, Vue, Prop } from 'vue-property-decorator';
import VideoComponent from '@/components/VideoComponent.vue';
import VideosEmDestaqueComponent from '@/components/VideosEmDestaqueComponent.vue';
import HomePageStore from '../store/HomePageStore'
import { getModule } from 'vuex-module-decorators'
import Video from '../models/Video'
@Component({
  components: {
    VideoComponent,
    VideosEmDestaqueComponent
  },
})
export default class VideoPage extends Vue {
    homePageStore = getModule(HomePageStore, this.$store)

    @Prop() private videoId!: number

    titulo = "Videos Relacionados"

    get video(){
        let videosFiltrados = this.homePageStore.getVideos.filter(v => this.videoId == v.id)
        if (videosFiltrados.length > 0){
            return videosFiltrados[0]
        } else {
            return new Video(null)
        }

    }

    get videoRelacionados(){
        return this.homePageStore.videosEmDestaque
    }
}
</script>