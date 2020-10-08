<template>

  <div class="mais-assistidos">
    <h3>{{ titulo }}</h3>

    <span v-if="isHorizontal">
      <VueSlickCarousel v-bind="settings">
        <div class="item" v-for="video in listaVideos">
          <VideoThumbnailComponent
          :video="video"/>
        </div>
      </VueSlickCarousel>
    </span>


    <span v-if="isVertical">
        <div class="item" v-for="video in listaVideos">
          <VideoThumbnailComponent
          :video="video"/>
        </div>
    </span>
  </div>
</template>

<script lang="ts">
import { Component, Prop, Vue } from 'vue-property-decorator';
import HomePageStore from '../store/HomePageStore'
import { getModule } from 'vuex-module-decorators'

import Video from '../models/Video'

import VueSlickCarousel from 'vue-slick-carousel'
import 'vue-slick-carousel/dist/vue-slick-carousel.css'
// optional style for arrows & dots
import 'vue-slick-carousel/dist/vue-slick-carousel-theme.css'
import VideoThumbnailComponent from '@/components/VideoThumbnailComponent.vue';

@Component({
  components:{
    VueSlickCarousel,
    VideoThumbnailComponent
  }
})
export default class VideosEmDestaqueComponent extends Vue {

  @Prop() private titulo!: string  
  @Prop() private orientacao!: string
  @Prop({ type: Array, required: true }) listaVideos!: Array<Video>

  get isVertical() {
    return this.orientacao == "vertical"
  }

  get isHorizontal() {
    return this.orientacao == "horizontal"
  }

  settings = {
    "dots": true,
    "infinite": false,
    "speed": 500,
    "slidesToShow": 4,
    "slidesToScroll": 4,
    "initialSlide": 0,
    "responsive": [
      {
        "breakpoint": 1024,
        "settings": {
          "slidesToShow": 3,
          "slidesToScroll": 3,
          "infinite": true,
          "dots": true
        }
      },
      {
        "breakpoint": 600,
        "settings": {
          "slidesToShow": 2,
          "slidesToScroll": 2,
          "initialSlide": 2
        }
      },
      {
        "breakpoint": 480,
        "settings": {
          "slidesToShow": 1,
          "slidesToScroll": 1
        }
      }
    ]
  }

}

</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped lang="scss">

// .item{
//   width: 500px;
//   height: 200px;
//   margin-left: 10px;
// }

  h3 {
    padding: 10px;
  }
</style>