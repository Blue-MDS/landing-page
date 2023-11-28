<template>
  <v-virtual-scroll
  :height="300"
  :items="['1', '2', '3', '4', '5', '6', '7', '8', '9', '10', '11', '12', '13', '14', '15', '16', '17', '18', '19', '20', '21', '22', '23', '24', '25', '26', '27', '28', '29', '30']"
>
  <template v-slot:default="{ item }">
    Item {{ item }}
  </template>
</v-virtual-scroll>
</template>

<script>
// import { ref, onMounted, onUnmounted, reactive } from 'vue';
import mintShadowImg from '@/assets/mint-shadow.png'
import framboiseShadowImg from '@/assets/framboise-shadow.png'
import lemonShadowImg from '@/assets/lemon-shadow.png'
import fraiseShadowImg from '@/assets/fraise-shadow.png'

export default {
  data() {
    return {
      sections: [
        { title: 'Section 1', content: "Car c'est dans l’eau que nos arômes montrent leur vraie puissance. ", img: mintShadowImg },
        { title: 'Section 2', content: "Chez Blue, l’eau est bien plus qu’une simple nécessité quotidienne. C’est une expérience qui éveille les sens, stimule la créativité et égaye la vie. ", img: framboiseShadowImg },
        { title: 'Section 3', content: "Notre mission est d’offrir à chacun la possibilité de s’hydrater plus sainement et avec du goût, où que tu sois, à tout moment de la journée.", img: lemonShadowImg },
        { title: 'Section 4', content: "Prépare-toi à plonger dans le monde de la fraîcheur, de la fantaisie et du plaisir. Bienvenue chez « Blue » !", img: fraiseShadowImg },
        { title: 'Section 5', content: 'Contenu 5', img: lemonShadowImg },
      ],
    };
  },
};
</script>

<style scoped>
</style>
