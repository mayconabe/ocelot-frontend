<template>
    <div class="video-thumbnail">
      <a href=""><img :src="video.video_thumb" alt="thumbnail"></a>
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
    padding: 2%;
  }
</style>
