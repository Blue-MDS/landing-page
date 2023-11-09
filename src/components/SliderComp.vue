<template>
  <v-card
    max-width="600"
    flat
  >
    <v-window v-model="step" class="mx-8" :class="currentClass">
      <v-window-item class="step1" :value="1">
        <v-card-text class="pa-16">
          <p>“Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor ut  et dolore magna aliqua. Ut enim ad minim veniam, quis consequa.”</p>
          <span class="text-caption text-grey-darken-1">
            This is the email you will use to login to your Vuetify account
          </span>
        </v-card-text>
      </v-window-item>

      <v-window-item class="step2" :value="2">
        <v-card-text class="pa-16">
          <p>“Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor ut  et dolore magna aliqua. Ut enim ad minim veniam, quis consequa.”</p>
          <span class="text-caption text-grey-darken-1">
            This is the email you will use to login to your Vuetify account
          </span>
        </v-card-text>
      </v-window-item>

      <v-window-item class="step3" :value="3">
        <v-card-text class="pa-16">
          <p>“Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor ut  et dolore magna aliqua. Ut enim ad minim veniam, quis consequa.”</p>
          <span class="text-caption text-grey-darken-1">
            This is the email you will use to login to your Vuetify account
          </span>
        </v-card-text>
      </v-window-item>
    </v-window>

    <v-card-actions class="justify-center mt-4">
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
    </v-card-actions>
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

  &.step1 {
    border-color: #F86DC0;
    background: #FECEEB;
    box-shadow: 8px 8px #F86DC0;
  }
  &.step2 {
    border-color: #63E5D4;
    background: #BEF5EE;
    box-shadow: 8px 8px 0px 0px #63E5D4;
  }
  &.step3 {
    border-color: #FEE440;
    background: #FFF7C5;
    box-shadow: 8px 8px 0px 0px #FEE440;
  }
}
</style>
