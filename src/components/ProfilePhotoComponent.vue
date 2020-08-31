<template>
  <div class="profilephoto">
    <b-dropdown size="sm" variant="link" toggle-class="text-decoration-none" no-caret>
      <template v-slot:button-content>
        <img alt="Vue logo" src="../assets/logo.png"/>
      </template>
      <div class="navbar-dropdown">
        <img alt="Vue logo" src="../assets/logo.png"/>
        <p>Maycon</p>
      </div>
      <b-dropdown-item href="#">Perfil</b-dropdown-item>
      <b-dropdown-item href="#">Configurações</b-dropdown-item>
      <b-dropdown-item href="#">Sair</b-dropdown-item>
    </b-dropdown>
    
  </div>
</template>

<script lang="ts">
import { Component, Prop, Vue } from 'vue-property-decorator';

@Component
export default class ProfilePhotoComponent extends Vue {
  
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
