<template>
  <div class="d-flex flex-column">
  <Carousel ref="myCarousel" :items-to-show="$vuetify.display.lgAndUp ? 1.5 : 1" :wrap-around="true" @update:modelValue="updateCurrentIndex">
    <Slide v-for="(article, index) in articles" :key="index">
      <div class="carousel__item d-flex flex-column text-left flex-sm-row pa-sm-4 align-center justify-space-between">
        <div class="d-flex flex-column px-6 text-uppercase align-self-start align-self-md-center">
          <span v-if="article.title" class="mb-2">{{ article.title }}</span>
          <span>{{ article.text }}</span>
        </div>
        <img :src="article.img" alt="slide" />
      </div>
    </Slide>

    <template #addons>
    </template>
  </Carousel>
  <div class="text-center mt-8">
    <button @click="prevSlide"><v-icon icon="mdi-arrow-left"></v-icon></button>
    <span class="slide-count font-weight-bold">{{ currentIndex + 1 }} - {{ slideTitles[currentIndex] }}</span>
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
    title: "Salut, nous c’est Blue 💧!",
    text: 'Blue est né lors d’une discussion dans le métro après les cours',
    img: teamOne,
  },
  {
    title: "Tu dois te demander comment l’idée est venue 🤔 ?",
    text: 'Tout est parti d’une femme avec une gourde d’eau de 3L oui, oui t’as bien lu : 3 LITRES D’EAU !',
    img: teamSeven,
  },
  {
    title: "Et là le débat commence…",
    text: '« Comment c’est possible de boire autant d’eau ?», « Comment toi tu ne peux pas aimer l’eau ? », Enfin bref, on tournait en rond 😅 ! ',
    img: teamImg,
  },
  {
    title: "Ce qu’on en a conclu… :",
    text: 'C’est quand même dingue d’eviter de boire de l’eau juste parce que ça n’a pas de goût…',
    img: teamSix,
  },
  {
    title: "Là, normalement t’as capté 😎 ?",
    text: 'On a commencé à faire des recherches sur le marché de l’eau et à se renseigner s’il y avait des solutions pour palier à ce problème.',
    img: teamTwo,
  },
  {
    title: "Nous voilà dans la peau d’Einstein. ",
    text: 'On a commencé à s’intéresser de plus en plus au sujet et à imaginer des hypothèses.',
    img: teamThree,
  },
  {
    title: "Notre solution ? ",
    text: 'Proposer des arômes naturels, sans sucre, sans colorant pour donner du goût à ton eau et t’aider à mieux t’hydrater.',
    img: teamFour,
  },
  {
    title: "Maintenant tu sais tout.",
    text: 'Ça c’est Blue 💧!',
    img: teamFive,
  },
])

const slideTitles = ref([
  "La team Blue",
  "Une histoire de gourde",
  "Une profonde discussion",
  "On est d’accord",
  "Hello la concu",
  "La team au labo",
  "Nos supers stars",
  "A suivre...",
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
  gap: 60px;
  height: 319px;
  width: 800px;
  background-color: white;
  font-size: 18px;

  img {
    max-height: 260px;
  }
}
.slide-count {
  display: inline-block;
  font-family: 'Poppins', sans-serif !important;
  font-size: clamp(14px, 3vw, 16px) !important;
  min-width: 260px;
  }
@media (max-width: 960px) {
  .slide-count {
    min-width: 200px;
  }
  .carousel__item {
    gap: 0;
    height: auto;
    div {
      font-size: 14px;
      justify-content: center;
      min-height: 150px;
    }

  }
}
@media (max-width: 768px) {
  .carousel__item {
    img {
      width: 100%;
      height: 288px;
      object-fit: cover;
    }
  }
}
</style>
