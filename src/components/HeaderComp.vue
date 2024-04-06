<template>
  <section class="section d-flex justify-center d-md-block">
    <div class="image-with-text">
      <v-img src="@/assets/waves.png" class="image-background" />
      <span class="text-overlay font-weight-black">Des arômes naturels qui font vibrer ton eau !</span>
      <v-btn class="ma-2 text-subtitle-1 button" color="black" href="#arm" width="368" height="54">
        Découvrir nos saveurs
      </v-btn>
    </div>
  </section>
</template>

<script setup>
</script>

<style lang="scss" scoped>
.section {
  background-color: #EFEFEF;
}
.image-with-text {
  position: relative;
  display: inline-block;

  .image-background {
    width: clamp(349px, 40vw, 655px);
    height: auto;
  }

  .text-overlay {
    position: absolute;
    width: 100%;
    text-align: center;
    top: 45%;
    left: 50%; 
    transform: translate(-50%, -50%);
    color: $coucou;
    font-family: 'Playfair Display', serif;
    font-size: clamp(40px, 5vw, 68px);
  }
  .button {
    font-family: 'Poppins', sans-serif !important;
    position: absolute;
    top: 80%;
    left: 50%;
    transform: translate(-50%, -50%);
  }
}

</style>
