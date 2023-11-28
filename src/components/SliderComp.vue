<template>
  <div class="d-flex flex-column align-center">
    <div class="carousel-container w-75">
      <span class="text-md-h3 text-h4 mx-2">
      Nos arômes sont validés
    </span>
    <div class="carousel-slider py-4" :style="carouselStyle">
      <div class="carousel-item" v-for="card in cards" :key="card.id">
        <v-card class="card d-flex align-center" :class="`step${card.id}`" min-height="350" max-width="350">
          <v-card-text class="pa-6 ">
            <blockquote class="font-italic font-weight-bold">
              ""
            </blockquote>
            <p>{{ card.quote }}</p>
            <p class="name">{{ card.name }}</p>
            <p class="occupation">{{ card.occupation }}</p>
          </v-card-text>
        </v-card>
      </div>
    </div>
  </div>
  <div class="justify-center mt-4">
      <v-btn
        rounded
        variant="text"
        @click="moveLeft"
        class="mx-2"
      >
      <v-icon icon="mdi-arrow-left"></v-icon>
      </v-btn>
      <v-btn
        rounded
        variant="flat"
        @click="moveRight"
        class="mx-2"
      >
      <v-icon icon="mdi-arrow-right"></v-icon>
      </v-btn>
    </div>
  </div>
</template>

<script>
export default {
  data() {
    return {
      currentIndex: 0,
      cards: [
        { id: 1, quote: "Lorem ipsum dolor sit amet, consectetur adipiscing elit...", name: "1", occupation: "Métier XXXX" },
        { id: 2, quote: "Lorem ipsum dolor sit amet, consectetur adipiscing elit...", name: "2", occupation: "Métier XXXX" },
        { id: 3, quote: "Lorem ipsum dolor sit amet, consectetur adipiscing elit...", name: "3", occupation: "Métier XXXX" },
        { id: 4, quote: "Lorem ipsum dolor sit amet, consectetur adipiscing elit...", name: "4", occupation: "Métier XXXX" },
        { id: 5, quote: "Lorem ipsum dolor sit amet, consectetur adipiscing elit...", name: "5", occupation: "Métier XXXX" },
        { id: 6, quote: "Lorem ipsum dolor sit amet, consectetur adipiscing elit...", name: "6", occupation: "Métier XXXX" },
        { id: 7, quote: "Lorem ipsum dolor sit amet, consectetur adipiscing elit...", name: "7", occupation: "Métier XXXX" },
        { id: 8, quote: "Lorem ipsum dolor sit amet, consectetur adipiscing elit...", name: "8", occupation: "Métier XXXX" },
        // ... autres cartes
      ],
    };
  },
  methods: {
    moveLeft() {
      this.currentIndex = Math.max(this.currentIndex - 1, 0);
    },
    moveRight() {
      this.currentIndex = Math.min(this.currentIndex + 1, this.cards.length - 3);
    },
  },
  computed: {
    carouselStyle() {
      const baseTranslation = -this.currentIndex * 100;
      return {
        transform: this.$vuetify.display.mdAndUp ? `translateX(${baseTranslation / 3}%)` : `translateX(${baseTranslation}%)`,
      };
    },
  },
};
</script>

<style>
.carousel-container {
  overflow: hidden;
  position: relative;
}
.carousel-slider {
  display: flex;
  transition: transform 0.3s ease-in-out;
}
.carousel-item {
  flex: 0 0 33.3333%;
  max-width: 33.3333%;
}
.card {
  margin: 0 10px;
  box-shadow: 0 4px 8px rgba(0,0,0,0.1);
  border-radius: 10px;
  overflow: hidden;
  background-color: #fff;
}
.card-content {
  padding: 20px;
  text-align: center;
}
.blockquote {
  quotes: "“" "”" "‘" "’";
}
.blockquote:before {
  content: open-quote;
}
.blockquote:after {
  content: close-quote;
}
.name {
  margin-top: 20px;
  font-weight: bold;
}
.occupation {
  color: #666;
}
.step1 {
  border-color: #F86DC0;
  background: #FECEEB;
  box-shadow: 8px 8px #F86DC0;
}
.step2 {
  border-color: #63E5D4;
  background: #BEF5EE;
  box-shadow: 8px 8px 0px 0px #63E5D4;
}
.step3 {
  border-color: #FEE440;
  background: #FFF7C5;
  box-shadow: 8px 8px 0px 0px #FEE440;
}
@media (max-width: 1142px) {
  .carousel-item {
    flex: 0 0 50%;
    max-width: 50%;
  }
  .carousel-container {
    width: 75% !important;
  }
}
@media (max-width: 767px) {
  .carousel-item {
    flex: 0 0 100%;
    max-width: 100%;
  }
  .carousel-container {
    width: 100% !important;
  }
}
</style>

<!-- <template>
  <v-card
    max-width="600"
    flat
  >
    <v-window v-model="step" class="mx-8" :class="currentClass">
      <v-window-item class="step1" :value="1">
        <v-card-text class="pa-md-16">
          <p>“Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor ut  et dolore magna aliqua. Ut enim ad minim veniam, quis consequa.”</p>
          <span class="text-caption text-grey-darken-1">
            This is the email you will use to login to your Vuetify account
          </span>
        </v-card-text>
      </v-window-item>

      <v-window-item class="step2" :value="2">
        <v-card-text class="pa-md-16">
          <p>“Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor ut  et dolore magna aliqua. Ut enim ad minim veniam, quis consequa.”</p>
          <span class="text-caption text-grey-darken-1">
            This is the email you will use to login to your Vuetify account
          </span>
        </v-card-text>
      </v-window-item>

      <v-window-item class="step3" :value="3">
        <v-card-text class="pa-md-16">
          <p>“Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor ut  et dolore magna aliqua. Ut enim ad minim veniam, quis consequa.”</p>
          <span class="text-caption text-grey-darken-1">
            This is the email you will use to login to your Vuetify account
          </span>
        </v-card-text>
      </v-window-item>
    </v-window>

    <div class="justify-center mt-4">
      <v-btn
        v-if="step > 1"
        rounded
        variant="text"
        @click="step--"
      >
      <v-icon icon="mdi-arrow-left"></v-icon>
      </v-btn>
      <v-btn
        v-if="step < 3"
        rounded
        variant="flat"
        @click="step++"
      >
      <v-icon icon="mdi-arrow-right"></v-icon>
      </v-btn>
    </div>
  </v-card>
</template>
<script>
  export default {
    data: () => ({
      step: 1,
    }),

    computed: {
      currentTitle () {
        switch (this.step) {
          case 1: return 'Sign-up'
          case 2: return 'Create a password'
          default: return 'Account created'
        }
      },
      currentClass () {
        switch (this.step) {
          case 1: return 'step1'
          case 2: return 'step2'
          default: return 'step3'
        }
      }
    },
  }
</script>

<style lang="scss" scoped>
.v-btn {
  border: 1.5px solid var(--Noir, #00060C);
  border-color: black;
  box-shadow: 4px 4px 0px 0px #00060C;
}
.v-window {
  border-radius: 18px;
  border: 1px solid;
  p {
    font-size: 20px;
  }

  .step1 {
    border-color: #F86DC0;
    background: #FECEEB;
    box-shadow: 8px 8px #F86DC0;
  }
  .step2 {
    border-color: #63E5D4;
    background: #BEF5EE;
    box-shadow: 8px 8px 0px 0px #63E5D4;
  }
  .step3 {
    border-color: #FEE440;
    background: #FFF7C5;
    box-shadow: 8px 8px 0px 0px #FEE440;
  }
}
</style> -->
