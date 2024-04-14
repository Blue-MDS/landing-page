<template>
  <section class="section d-flex flex-column flex-md-row justify-center px-5 px-md-0">
    <div class="image-with-text d-flex flex-column justify-space-between align-center mx-auto mx-md-0">
      <div>
        <img src="@/assets/waves.png" class="image-background" />
        <span class="text-overlay font-weight-black">Des arômes naturels qui font vibrer ton eau !</span>
      </div>
      <v-btn class=" d-none d-md-flex ma-2 text-subtitle-1 button" href="#arm" width="368" height="54" flat>
        Découvrir nos saveurs
      </v-btn>
    </div>
    <div>
      <img src="@/assets/starter.png" class="starter" />
    </div>
    <v-btn class=" d-flex d-md-none ma-2 text-subtitle-1 button" color="black" href="#arm" height="54">
      Découvrir nos saveurs
    </v-btn>
  </section>
</template>

<script setup>
</script>

<style lang="scss" scoped>
.section {
  gap: 45px;
  margin-top: 100px;
  margin-bottom: 161px;
  align-items: normal;
}
.image-with-text {
  position: relative;
  width: 565px;

  .image-background {
    height: clamp(175px, 40vw, 275px);
  }

  .text-overlay {
    position: absolute;
    width: 565px;
    text-align: center;
    top: 30%;
    left: 50%; 
    transform: translate(-50%, -50%);
    color: $coucou;
    font-family: 'Playfair Display', serif;
    font-size: clamp(40px, 5vw, 68px);
  }

}
.starter {
  width: 597px;
  }
.button {
font-family: 'Poppins', sans-serif !important;
width: 368px;
background-color: #020202 !important;
color: #FDFEFF !important;
transition: background-color 0.3s, color 0.3s, border-color 0.3s; // Transition smooth pour le changement de style au survol

&:hover {
  background-color: #FDFEFF !important;
  border-style: solid !important;
  border-width: 2px !important;
  border-color: #020202 !important;
  color: #020202 !important;
  text-decoration: none !important; // Annuler tout effet de décoration de texte ajouté par Vuetify
}
}
@media (max-width: 768px) {
  .section {
    margin-top: 50px;
    margin-bottom: 110px;
    align-items: center;
  }
  .image-with-text {
    max-width: 315px !important;
  }
  .text-overlay {
    top: 40% !important;
    max-width: 100% !important;
  }
  .starter {
    max-width: 100%;
  }
  .button {
    width: 100%;
  }
}

</style>
