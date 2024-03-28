<template>
    <v-app class="app">
    <default-bar />

    <default-view />
    <footer-compo />
  </v-app>
</template>

<script setup>
  import DefaultBar from './AppBar.vue'
  import DefaultView from './View.vue'
  import FooterCompo from '@/components/FooterComp.vue'

</script>
<style lang="scss">
.v-application {
  background: transparent !important;
}

</style>
