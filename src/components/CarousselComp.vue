<template>
  <v-card position="relative">
    <v-window v-model="step">
      <v-window-item v-for="(slide, i) in slides" :key="i">
        <v-sheet :color="colors[i]" height="100%" tile>
          <div class="d-flex flex-column fill-height justify-center align-center mx-md-16 pb-8">
            <div class="text-h2 test">{{ slide }} </div>
            <p class="px-12 text-center desc">Des Français boivent chaque jour la quantité minimum d’eau nécessaire à leur bien-être</p>
          </div>
        </v-sheet>
      </v-window-item>
      <div class="delimiter-container d-flex justify-space-between px-4 py-2">
        <div
          class="delimiter"
          v-for="index in slides.length"
          :key="index"
          :class="{ 'is-active': index - 1 === step }"
          @click="step = index - 1">
      </div>
      </div>
    </v-window>

  </v-card>
</template>

<script>
export default {
  data() {
    return {
      step: 0,
      colors: ['#F86DC0', '#63E5D4', '#FEE440'],
      slides: ['25%', '25%', '25%'],
    };
  },
};
</script>

<style lang="scss" scoped>
.test {
  font-family: 'Baloo Chettan 2' !important;
  color: white;
  text-shadow: 5px 5px 0px #00060C, 0 0 1px #00060C;
  font-size: 100px !important;
  font-weight: 700;
  margin-bottom: 40px;
}
.v-window-item {
  height: 490px;
  width: 540px;
}
@media (max-width: 767px) {
  .v-window-item {
    max-width: 365px;
    height: 384px;
  }
}
.delimiter-container {
  position: absolute;
  bottom: 60px;
  left: 25%;
  width: 50%;
}

.delimiter {
  width: 30%;
  height: 4px;
  background-color: grey;
  cursor: pointer;
  transition: background-color 0.3s;
}

.delimiter.is-active {
  background-color: white;
}
.desc {
  color: #00060C;
}
</style>
