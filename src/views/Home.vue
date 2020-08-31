<template>
  <div class="home">
    
      <VideoComponent/>
      <br><br>
      <MaisAssistidosComponent/>
  </div>
</template>

<script lang="ts">
import { Component, Vue } from 'vue-property-decorator';
import ProfilePhotoComponent from '@/components/ProfilePhotoComponent.vue'; // @ is an alias to /src
import VideoComponent from '@/components/VideoComponent.vue';
import MaisAssistidosComponent from '@/components/MaisAssistidosComponent.vue';
import RecomendadoComponent from '@/components/RecomendadoComponent.vue';
import RodapeComponent from '@/components/RodapeComponent.vue';

@Component({
  components: {
    ProfilePhotoComponent,
    VideoComponent,
    MaisAssistidosComponent,
    RecomendadoComponent,
    RodapeComponent,
  },
})
export default class Home extends Vue {
  
}
</script>
