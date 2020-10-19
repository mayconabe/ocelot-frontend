<template>
    <div class="video-thumbnail">
      <router-link :to="{name: 'VideoPage', params: {videoId: video.id}}">
        <img :src="video.thumbnail_url" alt="thumbnail"/>
        <p><b>{{ video.nome }}</b> {{ video.descricao }}</p>
      </router-link>
    </div>
</template>

<script lang="ts">
import { Component, Prop, Vue } from 'vue-property-decorator';
import Video from '../models/Video'

@Component
export default class VideoThumbnailComponent extends Vue {

 @Prop() private video!: Video 
 
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped lang="scss">


  img{
    max-width: 96%;
    max-height: 96%;
  }
</style>
