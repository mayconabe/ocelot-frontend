<template>
      <iframe 
          width="560" 
          height="315" 
          src="https://www.youtube.com/embed/qmN1Gf8rRc8?controls=0" 
          frameborder="0" 
          allow="accelerometer; autoplay; encrypted-media; gyroscope; picture-in-picture" 
          allowfullscreen>
      </iframe>
</template>

<script lang="ts">
import { Component, Prop, Vue } from 'vue-property-decorator';

@Component
export default class VideoComponent extends Vue {
  
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped lang="scss">
  iframe{
    width: 100%;
    height: 600px;
  }
</style>
