<template>

  <div class="mais-assistidos">
    <VueSlickCarousel v-bind="settings">
      <div class="item" v-for="video in videos">
        <VideoThumbnailComponent
        :video="video"/>
      </div>
    </VueSlickCarousel>
  </div>
</template>

<script lang="ts">
import { Component, Prop, Vue } from 'vue-property-decorator';
import HomePageStore from '../store/HomePageStore'
import { getModule } from 'vuex-module-decorators'

import VueSlickCarousel from 'vue-slick-carousel'
import 'vue-slick-carousel/dist/vue-slick-carousel.css'
// optional style for arrows & dots
import 'vue-slick-carousel/dist/vue-slick-carousel-theme.css'
import ThumbnailComponent from '@/components/ThumbnailComponent.vue';

import VueSlickCarousel from 'vue-slick-carousel'

@Component({
  components:{
    VueSlickCarousel,
    VideoThumbnailComponent
  }
})
export default class MaisAssistidosComponent extends Vue {

  homePageStore = getModule(HomePageStore, this.$store)

  get videos() {
    console.log(this.homePageStore.videosEmDestaque)
    return this.homePageStore.videosEmDestaque
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
</style>