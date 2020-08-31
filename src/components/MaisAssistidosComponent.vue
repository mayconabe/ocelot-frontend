<template>
  <div class="mais-assistidos">
    <div class="carousel">
      <div><img src="https://i.imgur.com/3aIutJi.png" alt="js" /></div>
      <div><img src="https://i.imgur.com/rWtGeQ0.png" alt="java" /></div>
      <div><img src="https://i.imgur.com/8946bSF.png" alt="python"/></div>
      <div><img src="https://i.imgur.com/9Hc7hjb.png" alt="kotlin" /></div>
      <div><img src="https://i.imgur.com/uZDEpjX.png" alt="scala" /></div>
      <div><img src="https://i.imgur.com/eQoyQjy.png" alt="C#" /></div>
      <div><img src="https://i.imgur.com/ko3iAbu.png" alt="PHP" /></div>
      <div><img src="https://i.imgur.com/Afkz5od.png" alt="dotnet" /></div>
    </div>
  </div>
</template>

<script lang="ts">
import { Component, Prop, Vue } from 'vue-property-decorator';
import $ from 'jquery';
@Component
export default class MaisAssistidosComponent extends Vue {

}

</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped lang="scss">
div{
  background-color: black;
}

.carousel{
  width: 1000px;
  margin: 0 auto;
}
</style>