<template>
  <section class="d-flex justify-center my-12 py-12">
    <div class="banner">
      <img :src="banner" alt="banner" />
      <div class="banner-text d-flex flex-column">
        <span class="title font-weight-black mb-5">Tu peux nous soutenir,<br> quand tu veux 💪</span>
        <span class="subtitle font-weight-regular mb-4">Aide-nous à développer le projet en participant <br> à notre campagne de financement participatif</span>
        <v-btn class="text-subtitle-1 button mt-4" color="black" width="368" height="54">
          En savoir plus
        </v-btn>
      </div>
    </div>
  </section>
</template>

<script setup>
import banner from '@/assets/banner.jpg'

</script>

<style lang="scss" scoped>
.banner {
  position: relative;
  overflow: hidden;
  display: flex;
  justify-content: center;
  height: 329px;

  img {
    width: 1200px;
    min-width: 100%;
    height: auto;
    object-fit: cover;
  }
  &-text {
    position: absolute;
    top: 50%;
    left: 10%;
    transform: translateY(-50%);
    color: black;
    font-size: 2rem;
    font-weight: 700;
    text-align: left;
    max-width: 90%;

    .title {
      font-family: 'Playfair Display', serif;
      font-size: clamp(22px, 3vw, 40px);
    }
    .subtitle {
      font-family: 'Poppins', sans-serif;
      font-size: clamp(12px, 3vw, 16px);
      color: $grey;
    }
    .button {
      font-family: 'Poppins', sans-serif !important;
    }
  }
}

</style>
