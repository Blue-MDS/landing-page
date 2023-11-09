<template>
  <div class="d-flex justify-center align-center">
    <div class="text-center px-4 title">
      <div class="fade-wrapper">
        <transition name="fade" mode="out-in">
          <h1 :key="currentHeading">{{ currentHeading }}</h1>
        </transition>
      </div>
      <v-btn prepend-icon="mdi-arrow-left" rounded>Restez connecté</v-btn>
    </div>
    <div class="package my-5 py-2 d-flex">
      <v-img src="../assets/mint.png" class="floating-img img1"></v-img>
      <v-img src="../assets/lemon.png" class="floating-img img2"></v-img>
      <v-img :aspect-ratio="1" src="../assets/strawberry.png" class="floating-img img3"></v-img>
    </div>
    <div class="description">
      <p>Chez Blue, nous nous engageons à rendre ton hydratation ludique, engageante et facile à intégrer dans ton quotidien. </p>
    </div>
  </div>
  <div class="py-2 px-2 text-slider overflow-hidden text-no-wrap my-4">
    <div class="d-flex align-center">
      <h3 v-for="(quality, i) in [...qualities, ...qualities]" :key="i" class="text-uppercase d-flex align-center">{{ quality }}</h3>
    </div>
  </div>
  <div class="d-flex justify-center align-center slider">
    <CarousselComp class="mx-2" />
    <span class="text-h2 mx-2">
      Notre <br> Motivation
    </span>
  </div>
  <div class="d-flex justify-center align-center slider">
    <span class="text-h2 mx-2">
      Nos arômes <br> sont validés
    </span>
    <SliderCompVue class="mx-2" />
  </div>
  <div class="my-4">
    <FormComp />
  </div>
  <!-- <v-btn prepend-icon="mdi-arrow-left" rounded /> -->
</template>

<script setup>
import { ref, onMounted, onUnmounted } from 'vue';
  import CarousselComp from '@/components/CarousselComp.vue';
  import SliderCompVue from '@/components/SliderComp.vue';
  import FormComp from '@/components/FormComp.vue';
  import StarSVG from '@/components/StarSVG.vue';

  const qualities = ["Arôme de fruits naturels", "Sans sucre ajouté", "Sans colorant", "Facilement transportable", "Sans édulcorant"];
  const headings = [
  'Marre de la sensation de déshydratation ?',
  "Besoin d'une hydratation régulière ?",
  "Recherchez-vous une meilleure qualité d'eau ?",
  // Ajoutez autant de titres que vous voulez ici
];
const currentHeading = ref(headings[0]); // Commencez par le premier titre
let headingIndex = 0; // L'indice du titre actuel

// Fonction pour passer au titre suivant
const nextHeading = () => {
  headingIndex = (headingIndex + 1) % headings.length; // Boucle à travers les titres
  currentHeading.value = headings[headingIndex];
};

let intervalId; // Pour stocker l'ID de l'intervalle, ce qui nous permet de l'arrêter plus tard

onMounted(() => {
  intervalId = setInterval(nextHeading, 2500); // Change le titre toutes les 5 secondes
});

onUnmounted(() => {
  clearInterval(intervalId); // Arrête l'intervalle lorsque le composant est démonté
});
</script>
<style lang="scss" scoped>
body {
  font-family: 'Baloo Chettan 2', sans-serif;
  font-weight: bold;
}
.v-btn {
  border: 1.5px solid var(--Noir, #00060C);
  border-color: black;
  box-shadow: 4px 4px 0px 0px #00060C;
}
.package {
  height: 500px;
  width: 40%;
  opacity: 0; /* Initialement invisible */
  animation: fadeIn 0.5s ease-in-out 3s forwards;

    @keyframes float {
      0%, 100% { 
      transform: translateY(0) rotate(0deg); 
    }
    25% { 
      transform: translateY(-20px) rotate(-3deg); 
    }
    50% { 
      transform: translateY(0) rotate(0deg); 
    }
    75% { 
      transform: translateY(-20px) rotate(3deg); 
    }
  }

    .floating-img {
      width: 100px;
      height: auto;
      animation: float 6s ease-in-out infinite;

    &.img1 {
      left: 30px;
      z-index: 1;
    }
    &.img2 {
      z-index: 2;
      animation-delay: 2.5s;
    }
    &.img3 {
      right: 30px;
      z-index: 3;
      animation-delay: 3s;
    }
  }
}
.text-slider {
  border: 1px solid;
  font-family: 'Poppins', sans-serif;

  &>div {
    position: relative;
    width: 100vw;
    height: 100%;
    animation: scroll-left 20s linear infinite;

    h3 {
      &::before {
        content: "";
        width: 20px;
        height: 20px;
        background-image: url('../assets/star.svg');
        background-size: contain;
        padding-right: 80px;
      }
      &::after {
        content: "";
        padding-left: 80px;
      }
    }
  }
}
@keyframes fadeIn {
  from {
    opacity: 0;
  }
  to {
    opacity: 1;
  }
}
@keyframes scroll-left {
  from {
    transform: translateX(0%);
  }
  to {
    transform: translateX(-100%);
  }
}
.title {
  opacity: 0; /* Initialement invisible */
  animation: fadeIn 0.5s ease-in-out 1s forwards;
  max-width: 400px;
}
.description {
  opacity: 0; /* Initialement invisible */
  animation: fadeIn 0.5s ease-in-out 3s forwards;
  max-width: 400px;
}
.fade-wrapper {
  position: relative;
}

.fade-enter-active, .fade-leave-active {
  transition: opacity 0.5s;
}

.fade-enter-from, .fade-leave-to {
  opacity: 0;
}
.slider {
  margin-block: 50px;
}
</style>