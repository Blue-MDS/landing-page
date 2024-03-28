<template>
  <section class="d-flex flex-column justify-center my-12 py-12 px-8">
    <v-row no-gutters>
      <v-col cols="12" md="6">
        <div class="d-flex align-center mb-8 mb-md-0">
          <span class="title text-h3 font-weight-black">Qui de mieux que nos utilisateurs pour valider nos arômes 🤷‍♀️</span>
        </div>
      </v-col>
      <v-col cols="12" md="6">
          <div class="slide-container">
            <Carousel ref="myCarousel" :items-to-show="1" :wrap-around="true" @update:modelValue="updateCurrentIndex">
              <Slide v-for="(opinion, index) in opinions" :key="index">
                <v-card max-width="542" min-height="450" class="pa-6">
                    <v-card-text class="px-0">
                      <p class="opinion mb-9">
                        {{ opinion.text }}
                      </p>
                      <div class="d-flex justify-center">
                      <div class="d-flex flex-column align-center">
                        <v-avatar
                        size="64px"
                        >
                          <v-img
                            alt="Avatar"
                            :src="opinion.avatar"
                            :width="50"
                          ></v-img>
                        </v-avatar>
                        <span class="font-weight-bold user-text">{{ opinion.user }}</span>
                        <span class="user-text">{{ opinion.occupation }}</span>
                        <v-rating
                          v-model="rating"
                          size="x-small"
                          density="comfortable"
                          readonly
                        ></v-rating>
                      </div>
                      <span class="mt-3 ml-5 mr-9">x</span>
                      <div class="d-flex flex-column align-center">
                        <v-avatar
                        size="64px"
                        >
                          <v-img
                            alt="Avatar"
                            :src="opinion.fruitIcon"
                          ></v-img>
                        </v-avatar>
                      </div>
                    </div>
                    </v-card-text>
                </v-card>
              </Slide>

              <template #addons>
                <Navigation v-if="currentIndex > 1" />
              </template>
            </Carousel>
            <div class="text-center mt-5 slide-navigation">
              <button @click="prevSlide"><v-icon icon="mdi-arrow-left"></v-icon></button>
              <span class="font-weight-bold slide-count">{{ currentIndex + 1 }} - {{ opinions[currentIndex].name }}</span>
              <button @click="nextSlide"><v-icon icon="mdi-arrow-right"></v-icon></button>
            </div>
          </div>
      </v-col>
    </v-row>
  </section>
</template>

<script setup>
import { ref } from 'vue'
import { Carousel, Navigation, Slide } from 'vue3-carousel'
import vanillaIcon from '@/assets/vanilla-icon.jpg'
import fraisetteIcon from '@/assets/fraisette-icon.jpg'
import userOne from '@/assets/user-one.png'
import userTwo from '@/assets/user-two.jpeg'
import 'vue3-carousel/dist/carousel.css'

const myCarousel = ref(null)
const currentIndex = ref(0)
const rating = ref(4)

const opinions = [
  {
    name: 'Vanilla',
    user: 'Jennifer',
    avatar: userOne,
    occupation: 'Etudiante',
    text: '« J’ai testé l’arôme vanille de la marque Blue et j’ai vraiment aimé le goût assez léger qu’on peut ressentir en buvant avec l’eau. Il donne un goût prononcé à l’eau et se laisse boire facilement ! Je recommande fortement pour les personnes qui ont du mal à boire de l’eau et qui cherche une alternative saine !! »',
    rating: 5,
    fruitIcon: vanillaIcon
  },
  {
    name: 'Fraisette',
    user: 'Olga',
    avatar: userTwo,
    occupation: 'Etudiante',
    text: "« Alors moi j'ai goûté l'arôme fraise, dans une bouteille de 50cl j'ai mis 3-4 gouttes, j'ai tout de suite senti le parfum dès que j'ouvrais le bouchon, ça me donnait envie de boire encore plus juste pour l'odeur ! »",
    rating: 5,
    fruitIcon: fraisetteIcon
  },
]

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
section {
  background-color: $sky-blue;
  .title {
    font-family: 'Playfair Display', serif !important;
    font-size: clamp(24px, 3vw, 40px) !important;
    max-width: 300px;
    line-height: normal;
  }
  .user-text {
    font-family: 'Poppins', sans-serif !important;
    font-size: clamp(12px, 3vw, 16px) !important;
  }
  .opinion {
    font-family: 'Poppins', sans-serif !important;
    font-size: clamp(16px, 3vw, 20px) !important;
    line-height: 1.5;
  }
  .slide-container {
    max-width: 566px;
  }
  .slide-navigation {
    display: flex;
    justify-content: flex-end;
    align-items: center;

    button {
      margin: 0 5px;
    }
  }
  .slide-count {
    font-family: 'Poppins', sans-serif !important;
    font-size: clamp(14px, 3vw, 16px) !important;
  }
}
</style>
