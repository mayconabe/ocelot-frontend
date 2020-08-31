<template>
    <span>
      <div>
        <b-navbar-brand href="#" class="float-left">Logo</b-navbar-brand>
        <b-nav align="center">
          <b-nav-item href="#"><router-link to="/">Início</router-link></b-nav-item>
          <b-nav-item href="#"><router-link to="/about">Inscrições</router-link></b-nav-item>
          <b-nav-item>Pesquisar</b-nav-item>
          <b-nav-item right><ProfilePhotoComponent></ProfilePhotoComponent></b-nav-item>
        </b-nav>
      </div>

      <!-- Video Area -->
      
      <VideoComponent></VideoComponent>
      <MaisAssistidosComponent></MaisAssistidosComponent>
    </span>
</template>

<script lang="ts">
import { Component, Vue } from 'vue-property-decorator';
import ProfilePhotoComponent from '@/components/ProfilePhotoComponent.vue'; // @ is an alias to /src
import VideoComponent from '@/components/VideoComponent.vue';
import MaisAssistidosComponent from '@/components/MaisAssistidosComponent.vue';

@Component({
  components: {
    ProfilePhotoComponent,
    VideoComponent,
    MaisAssistidosComponent
  },
})
export default class App extends Vue {

}
</script>

<style lang="scss">
  .navbar-logo {
    position: absolute;
    padding-left: 5px;
  }
</style>