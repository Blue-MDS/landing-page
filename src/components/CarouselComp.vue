<template>
  <div class="d-flex flex-column">
  <Carousel ref="myCarousel" :items-to-show="$vuetify.display.lgAndUp ? 1.8 : 1" :wrap-around="true" @update:modelValue="updateCurrentIndex">
    <Slide v-for="(article, index) in articles" :key="index">
      <div class="carousel__item d-flex flex-column flex-md-row pa-md-4 align-center justify-space-around">
        <p class="pa-4" v-html="article.text" ></p>
        <img :src="article.img" alt="slide" />
      </div>
    </Slide>

    <template #addons>
    </template>
  </Carousel>
  <div class="text-center mt-8">
    <button @click="prevSlide"><v-icon icon="mdi-arrow-left"></v-icon></button>
    <span class="slide-count font-weight-bold">{{ currentIndex + 1 }} - L'histoire de Blue</span>
    <button @click="nextSlide"><v-icon icon="mdi-arrow-right"></v-icon></button>
  </div>
</div>
</template>

<script setup>
import { ref } from 'vue'
import { Carousel, Slide } from 'vue3-carousel'
import 'vue3-carousel/dist/carousel.css'
import teamImg from '@/assets/team.jpg'
import teamOne from '@/assets/team-1.jpg'
import teamTwo from '@/assets/team-2.jpg'
import teamThree from '@/assets/team-3.jpg'
import teamFour from '@/assets/team-4.png'
import teamFive from '@/assets/team-5.jpg'
import teamSix from '@/assets/team-6.jpg'
import teamSeven from '@/assets/team-7.jpg'

const myCarousel = ref(null)
const currentIndex = ref(0)

const articles = ref([
  {
    text: 'Salut, nous c’est Blue !<br />Blue est né lors d’une discussion dans métro après les cours.',
    img: teamOne,
  },
  {
    text: 'Tu dois te demander comment c’est venu ?<br />C’est parti d’une femme qui avait une gourde de 3L d’eau.',
    img: teamSeven,
  },
  {
    text: 'Voilà, le débat qui commence…<br />« Comment on peut boire autant d’eau ? », « Comment toi tu peux ne pas aimer l’eau ? », bref on tourner en rond !',
    img: teamImg,
  },
  {
    text: 'Conclusion du débat :<br />C’est quand même dingue d’éviter de boire de l’eau, juste parce que ça n’a pas de goût…',
    img: teamSix,
  },
  {
    text: 'Là, normalement t’a capté ?<br />On a commencé à faire des recherches sur le marché de l’eau et à se renseigner s’il y avait des solutions pour palier à ce problème.',
    img: teamTwo,
  },
  {
    text: 'Nous voilà dans la peau d’Einstein.<br />On a commencé à s’intéresser de plus en plus au sujet et à imaginer des hypothèses.',
    img: teamThree,
  },
  {
    text: 'Notre solution ?<br />Proposer des arômes naturels, sans sucre, sans colorant pour donner du goût à ton eau et t’aider à mieux t’hydrater.<br />Maintenant tu sais tout. Ça c’est Blue !',
    img: teamFour,
  },
  {
    text: 'Maintenant tu sais tout.<br /> Ça c’est Blue 💧!',
    img: teamFive,
  },
])

const updateCurrentIndex = (newIndex) => {
  currentIndex.value = newIndex;
};

const prevSlide = () => {
  myCarousel.value.prev();
};

const nextSlide = () => {
  myCarousel.value.next();
};
</script>

<style lang="scss" scoped>
.carousel__item {
  height: 319px;
  width: 800px;
  background-color: white;
  font-size: 20px;

  img {
    max-height: 260px;
  }
}
.slide-count {
  font-family: 'Poppins', sans-serif !important;
  font-size: clamp(14px, 3vw, 16px) !important;
  }
@media (max-width: 960px) {
  .carousel__item {
    height: auto;
    img {
      width: 100%;
      max-height: none;
    }
  }
}
</style>
