<template>
  <div class="d-flex flex-column align-center">
    <div class="carousel-container w-75">
      <span class="text-md-h3 text-h4 mx-2">
      Nos arômes sont validés
    </span>
    <div class="carousel-slider py-4" :style="carouselStyle">
      <div class="carousel-item" v-for="card in cards" :key="card.id">
        <v-card class="card d-flex align-center" :class="`step${card.id}`" :max-width="$vuetify.display.smAndUp ? 350 : null">
          <v-card-text class="d-flex flex-column justify-space-between px-6">
            <blockquote class="font-italic font-weight-bold">
              ""
            </blockquote>
            <p class="quote">{{ card.quote }}</p>
            <div class="d-flex flex-column">
              <span class="name">
                {{ card.name }}
              </span>
              <span class="occupation">
                {{ card.occupation }}</span>
              </div>
          </v-card-text>
        </v-card>
      </div>
    </div>
  </div>
  <div class="justify-center mt-4">
      <v-btn
      v-if="currentIndex > 0"
        rounded
        variant="text"
        @click="moveLeft"
        class="mx-2"
      >
      <v-icon icon="mdi-arrow-left"></v-icon>
      </v-btn>
      <v-btn
      v-if="currentIndex < 6"
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
      console.log(this.currentIndex);
      this.currentIndex = Math.max(this.currentIndex - 1, 0);
    },
    moveRight() {
      console.log(this.currentIndex);
      this.currentIndex = Math.min(this.currentIndex + 1, this.cards.length - (this.$vuetify.display.lgAndUp ? 3 : this.$vuetify.display.sm ? 2 : 1));
    },
  },
  computed: {
    carouselStyle() {
      const baseTranslation = -this.currentIndex * 100;
      return {
        transform: this.$vuetify.display.mdAndUp ? `translateX(${baseTranslation / 3}%)`: this.$vuetify.display.sm ? `translateX(${baseTranslation / 2}%)` : `translateX(${baseTranslation}%)`,
      };
    },
  },
};
</script>

<style lang="scss">

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

  .v-card-text {
    padding-top: 27px;
    padding-bottom: 43px;
    min-height: 358px;
    line-height: normal;

      .name {
      font-size: 16px;
      margin-top: 20px;
      font-weight: bold;
    }
    .occupation {
      font-size: 16px;
      color: #666;
    }
    
    .quote {
      font-size: 20px;
    }
  }
}
    
blockquote {
  font-size: 60px;
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
@media (max-width: 960px) {
  .carousel-item {
    flex: 0 0 50%;
    max-width: 50%;
  }
  .carousel-container {
    width: 75% !important;
  }
}
@media (max-width: 600px) {
  .carousel-item {
    flex: 0 0 100%;
    max-width: 100%;
  }
  .carousel-container {
    width: 100% !important;
  }
}
</style>


