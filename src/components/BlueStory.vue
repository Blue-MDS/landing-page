<template>
  <section class="section pt-8 pb-8 px-5 px-sm-0">
    <span class="title ml-8">Il était une fois Blue ...</span>
    <CarouselCompVue class="mt-8" />
  </section>
</template>
<script setup>
import CarouselCompVue from './CarouselComp.vue';
</script>

<style lang="scss" scoped>
.section {
  width: 100%;
  height: auto;
  background-color: $pistache;

  .title {
    font-family: 'Playfair Display', serif;
    font-weight: bold;
    font-size: clamp(22px, 3vw, 40px);
    color: black;
  }
}

</style>