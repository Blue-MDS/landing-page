<template>
  <v-app-bar app flat class="py-3 py-md-6">
    <v-container class="px-8" fluid>
      <div class="d-flex align-center justify-space-between w-100">
        <img src="@/assets/logo.png" alt="logo" :height="$vuetify.display.mdAndUp ? 50 : 26">
        <v-btn icon class="d-block d-md-none" @click="drawer = !drawer">
          <v-icon>mdi-menu</v-icon>
        </v-btn>
        <ul class="d-none d-md-flex gap">
          <template v-for="link in links" :key="link.title">
            <a :href="link.path" class="link text-decoration-none mx-2 text-black">{{ link.title }}</a>
          </template>
        </ul>
        <!-- <v-btn class="d-none d-md-flex ma-2 text-subtitle-1 button" variant="outlined">
          Nous financer
        </v-btn> -->
      </div>
    </v-container>
  </v-app-bar>
  
  <v-navigation-drawer v-model="drawer" :permanent="false" :mobile-break-point="960" location="right" width="200">
    <v-list class="mt-8">
      <template v-for="link in links" :key="link.title">
        <v-list-item>
          <a class="link text-decoration-none text-black" :href="link.path">{{ link.title }}</a>
        </v-list-item>
      </template>
      <!-- <v-list-item>
        <v-btn class="ma-2 text-subtitle-1 button" variant="outlined">
          Nous financer
        </v-btn>
      </v-list-item> -->
    </v-list>
  </v-navigation-drawer>
</template>

<script setup>
import { ref } from 'vue'

const drawer = ref(false)
const links = [
  { title: 'À propos', path: '#about' },
  { title: 'Arômes', path: '#arm' },
  { title: 'Contact', path: '#contact' }
]
</script>

<style lang="scss" scoped>
.button {
  font-family: 'Poppins', sans-serif !important;
}
.link {
  font-family: 'Poppins', sans-serif !important;
  font-size: 18px;
  font-weight: 600;
}
</style>
