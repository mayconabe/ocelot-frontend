<template>
      <iframe 
          width="560" 
          height="315" 
          :src="video.external_url" 
          frameborder="0" 
          allow="accelerometer; autoplay; encrypted-media; gyroscope; picture-in-picture" 
          allowfullscreen>
      </iframe>
</template>

<script lang="ts">
import { Component, Prop, Vue } from 'vue-property-decorator';
import { getModule } from 'vuex-module-decorators'
import HomePageStore from '../store/HomePageStore'
import Video from '../models/Video'

@Component
export default class VideoComponent extends Vue {

  @Prop() private video!: Video

}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped lang="scss">
  iframe{
    width: 100%;
    height: 600px;
  }
</style>
