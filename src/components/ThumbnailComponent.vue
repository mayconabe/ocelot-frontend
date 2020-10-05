<template>
  <div class="video-thumbnail">
    <a :href="video.video_url"><img :src="video.video_thumbnail" alt="thumbnail"></a>
  </div>
</template>

<script lang="ts">
import { Component, Prop, Vue } from 'vue-property-decorator';
import Video from '../models/Video';

@Component
export default class ThumbnailComponent extends Vue {

  @Prop() private video!: Video



}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped lang="scss">
  iframe{
    width: 100%;
    height: 600px;
  }

  img {
    max-width: 96%;
    padding: 2%;
  }
</style>
