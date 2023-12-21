<template>
  <div class="d-flex flex-column flex-md-row align-cetner justify-end">
    <span class="text-md-h3 text-h4 mx-md-8 mt-md-8 mb-4 text-center"> Chez blue tout se <br v-if="$vuetify.display.smAndUp"> passe dans l'eau !</span>
    <div class="collapse-container d-none d-md-flex justify-end">
      <div
        class="collapse-section"
        v-for="(section, index) in sections"
        :key="section.title"
        @click="toggleSection(index)"
        :class="[{'active': section.isActive}, `bg-${index}`]"
      >
        <div class="section-content d-flex flex-column align-center text-center h-100">
          <span class="pt-8">{{ section.content }}</span>
          <v-img  :src="section.img" width="200" />
        </div>
      </div>
    </div>
    <div class="mobile-container d-md-none">
      <div 
        v-for="(section, index) in sections" 
        :key="section.title" 
        class="mobile-section d-flex flex-column align-center"
        :class="`bg-${index}`"
      >
        <span class="px-4 text-center">{{ section.content }}</span>
        <v-img :src="section.img" width="280" />
      </div>
    </div>
  </div>
</template>

<script>
import mintShadowImg from '@/assets/mint-shadow.png'
import framboiseShadowImg from '@/assets/framboise-shadow.png'
import lemonShadowImg from '@/assets/lemon-shadow.png'
import fraiseShadowImg from '@/assets/fraise-shadow.png'
export default {
  data() {
    return {
      sections: [
        { title: 'Section 1', content: "Car c'est dans l’eau que nos arômes montrent leur vraie puissance. ", isActive: true, img: mintShadowImg },
        { title: 'Section 2', content: "Chez Blue, l’eau est bien plus qu’une simple nécessité quotidienne. C’est une expérience qui éveille les sens, stimule la créativité et égaye la vie. ", isActive: false, img: framboiseShadowImg },
        { title: 'Section 3', content: "Notre mission est d’offrir à chacun la possibilité de s’hydrater plus sainement et avec du goût, où que tu sois, à tout moment de la journée.", isActive: false, img: lemonShadowImg },
        { title: 'Section 4', content: "Prépare-toi à plonger dans le monde de la fraîcheur, de la fantaisie et du plaisir. Bienvenue chez « Blue » !", isActive: false, img: fraiseShadowImg },
      ],
      scrollY: 0,
    };
  },
  methods: {
    toggleSection(index) {
      this.sections[index].isActive = !this.sections[index].isActive;
      this.sections.forEach((section, i) => {
        if (i !== index) {
          section.isActive = false;
        }
      });
    },
  },
};
</script>

<style lang="scss" scoped>
.bg-0 {
  background-color: #F86DC0;
}
.bg-1 {
  background-color: #FEE440;
}
.bg-2 {
  background-color: #00BBF9;
}
.bg-3 {
  background-color: #63E5D4;
}
.collapse-container {
  transition: all 2.5s ease;
  width: 65%;
}
.collapse-section {
  height: 640px;
  max-width: 68px;
  flex-basis: 10%;
  transition: flex-basis 0.5s ease, max-width 0.5s, height 2.5s ease; /* Transition pour flex-basis et height */
  overflow: hidden;
  cursor: pointer;
  display: flex;
  justify-content: center;
  align-items: center;
}

/* La classe active doit être appliquée aux sections et non au conteneur */
.collapse-section.active {
  flex-basis: 60%;
  max-width: 537px;

  .section-content {
    opacity: 1;
  }
}

.section-content {
  opacity: 0;
  transition: all 0.2s ease;
  font-size: 24px;
  padding-inline: 30px;

  span {
    min-width: 460px
  }
}
.sticky-title {
  position: sticky;
  top: 0;
  z-index: 10;
  background: white;
  width: 100%;
}

.mobile-section {
  position: sticky;
  width: 100vw;
  height: 100vh;
  top: 0;

  span {
    margin-top: 73px;
    font-size: 22px;
  }
}
</style>
