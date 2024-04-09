<template>
  <v-footer class="bg-black py-3">
    <v-row class="flex-column-reverse flex-md-row" justify="center" align="center" no-gutters>
      <v-col class="text-center my-6 my-md-0" cols="12" md="4">
        <span>©Blue -{{ new Date().getFullYear() }} — Tous droits réservés</span>
      </v-col>
      <v-col class="text-center mt-6 mt-md-0" cols="12" md="4">
        <v-btn
          v-for="link in links"
          class="text-subtitle-1"
          :key="link"
          color="white"
          variant="text"
          :href="link.link"
        >
          {{ link.text }}
        </v-btn>
      </v-col>
      <v-col class="text-center mt-6 mt-md-0" cols="12" md="4">
        <a
          v-for="social in socials"
          :key="social.link"
          :href="social.link"
          target="_blank"
          class="mx-6"
        >
          <FontAwesomeIcon
            :icon="social.icon"
            class="text-white"
            size="2x"
          />
        </a>
      </v-col>
    </v-row>
  </v-footer>
</template>

<script setup>
import { FontAwesomeIcon } from '@fortawesome/vue-fontawesome'
import { faLinkedin, faTiktok, faInstagram } from '@fortawesome/free-brands-svg-icons'

const links = [
  {
    text: 'A propos',
    link: '#about',
  },
  {
    text: 'Aromes',
    link: '#arm',
  },
  {
    text: 'Contact',
    link: '#contact',
  },
]
const socials = [
  { icon: faInstagram, link: 'https://www.instagram.com/blue.aromes?igsh=YW5xd2NnZmt6YXpt' },
  { icon: faLinkedin, link: 'https://www.linkedin.com/company/blue.fr/' },
  { icon: faTiktok, link: 'https://www.tiktok.com/@blue_aromes' },
]
</script>

<style lang="scss" scoped>
.v-footer {
  color: white;
  font-family: 'Poppins', sans-serif !important;

  .v-btn {
    font-family: 'Poppins', sans-serif !important;
  }
}
</style>