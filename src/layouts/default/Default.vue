<template>
    <v-app class="app">
    <default-bar />

    <default-view />
  </v-app>
</template>

<script setup>
  import DefaultBar from './AppBar.vue'
  import DefaultView from './View.vue'

</script>
<style lang="scss">
.v-application {
  background: transparent !important;
}
@keyframes fadeIn {
  from {
    opacity: 0;
  }
  to {
    opacity: 1;
  }
}
.app {
  opacity: 0; /* Initialement invisible */
  animation: fadeIn 0.5s ease-in-out 1s forwards;
}
</style>
