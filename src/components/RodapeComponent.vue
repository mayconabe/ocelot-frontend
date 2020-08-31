<template>
  <div class="rodape">
    <div>
      <b-nav fill>
        <b-nav-item href="#">Sobre</b-nav-item>
        <b-nav-item>© 2020 Ocelot Academy</b-nav-item>
        <b-nav-item>Contato</b-nav-item>
      </b-nav>
    </div>
  </div>
</template>

<script lang="ts">
import { Component, Prop, Vue } from 'vue-property-decorator';

@Component
export default class RodapeComponent extends Vue {

}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped lang="scss">
    .rodape {
        background-color: #222;
    }
</style>

