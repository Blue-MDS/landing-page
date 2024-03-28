<template>
  <div class="d-flex flex-column">
  <Carousel ref="myCarousel" :items-to-show="$vuetify.display.lgAndUp ? 1.8 : 1" :wrap-around="true" @update:modelValue="updateCurrentIndex">
    <Slide v-for="(slide, index) in 5" :key="index">
      <div class="carousel__item d-flex flex-column flex-md-row pa-md-4 align-center">
        <p class="px-2 pa-4">
          Lorem ipsum dolor sit consectetur adipiscing elit. Sed non risus amet. Suspendisse lectus tor elementum, dignissim sit amet, adipiscing nec, ultricies sed, dolor. Cras dolor sit tor elementum adipiscing elit.
        </p>
        <img src="@/assets/team.jpg" alt="slide" />
      </div>
    </Slide>

    <template #addons>
      <Navigation v-if="currentIndex > 1" />
    </template>
  </Carousel>
  <div class="text-center mt-8">
    <button @click="prevSlide"><v-icon icon="mdi-arrow-left"></v-icon></button>
    <span class="slide-count font-weight-bold">{{ currentIndex + 1 }} - Praesent egestas leo in pede</span>
    <button @click="nextSlide"><v-icon icon="mdi-arrow-right"></v-icon></button>
  </div>
</div>
</template>

<script setup>
import { ref } from 'vue'
import { Carousel, Navigation, Slide } from 'vue3-carousel'
import 'vue3-carousel/dist/carousel.css'

const myCarousel = ref(null)
const currentIndex = ref(0)

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
