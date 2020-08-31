<template>
  <div>
    <VideoComponent/>
  </div>
</template>

<script lang="ts">
import { Component, Vue } from 'vue-property-decorator';
import ProfilePhotoComponent from '@/components/ProfilePhotoComponent.vue'; // @ is an alias to /src
import VideoComponent from '@/components/VideoComponent.vue';

@Component({
  components: {
    ProfilePhotoComponent,
    VideoComponent,
  },
})
export default class Home extends Vue {}
</script>
