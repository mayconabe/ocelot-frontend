<template>
  <div class="profilephoto">
    <b-dropdown size="sm" variant="link" toggle-class="text-decoration-none" no-caret>
      <template v-slot:button-content>
        <img alt="Vue logo" :src="url"/>
      </template>
      <div class="navbar-dropdown">
        <img alt="Vue logo" :src="url"/>
        <p>{{ username }}</p>
      </div>
      <b-dropdown-item href="#">Perfil</b-dropdown-item>
      <b-dropdown-item href="#">Configurações</b-dropdown-item>
      <b-dropdown-item href="#">Sair</b-dropdown-item>
    </b-dropdown>
    
  </div>
</template>

<script lang="ts">
import { Component, Prop, Vue } from 'vue-property-decorator';
import { getModule } from 'vuex-module-decorators';
import GlobalStore from '../store/GlobalStore'

@Component
export default class ProfilePhotoComponent extends Vue {

  globalStore = getModule(GlobalStore, this.$store)

  get url(){
    return this.globalStore.perfil.url
  }

  get username(){
    return this.globalStore.perfil.username
  }
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped lang="scss">
  img {
    width: 32px;
  }

  .navbar-dropdown {
    text-align: center;
  }
</style>
