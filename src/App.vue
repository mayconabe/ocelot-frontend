<template>
  <span>
    <div class="menu-navbar">
      <b-navbar-brand href="#" class="float-left">Logo</b-navbar-brand>
      <b-nav align="center">
        <b-nav-item href="#"><router-link to="/">Início</router-link></b-nav-item>
        <b-nav-item href="#"><router-link to="/about">Inscrições</router-link></b-nav-item>
        <b-nav-item>Pesquisar</b-nav-item>
        <b-nav-item class="navitem-logo"><ProfilePhotoComponent></ProfilePhotoComponent></b-nav-item>
      </b-nav>
    </div>
    <router-view/>
  </span>
</template>

<script lang="ts">
import { Component, Vue } from 'vue-property-decorator';
import ProfilePhotoComponent from '@/components/ProfilePhotoComponent.vue'; // @ is an alias to /src


@Component({
  components: {
    ProfilePhotoComponent,
  },
})
export default class App extends Vue {

}
</script>

<style lang="scss">
  .menu-navbar {
    position: fixed;
    margin-left: auto;
    margin-right: auto;
    left: 0;
    right: 0;
    text-align: center;
    width: 100%;

    .navitem-logo {
      float: right;
      // position: absolute;
      // right: 0;
    }
  }

  
</style>