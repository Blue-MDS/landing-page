<template>
  <section id="arm" class="d-flex flex-column justify-center mt-12">
    <div class="title d-flex flex-column text-center mb-8">
      <span class="title text-h3 font-weight-black mb-3">Ils ont hâte de te rencontrer </span>
      <span class="subtitle mt-3 px-4 px-sm-0">Nos arômes Fraise, Menthe, Vanille et Mirabelle arrivent très bientôt</span>
    </div>
    <div class="d-flex aromes justify-center">
      <v-card v-for="item in items" :key="item.id" flat>
        <div class="arome d-flex flex-column justify-center align-center"
            :class="[`${item.name}-bg`, `${item.name}-hover`]">
          <span class="title-arome text-uppercase mb-4">{{ item.name }}</span>
          <img :src="item.path" :alt="item.name" />
        </div>
        <v-card-actions class="px-0 mt-4">
          <v-btn
            class="text-none text-subtitle-1 button flex-grow-1"
            color="black"
            variant="flat"
            height="54"
            @click="openDialog(item.name)"
          >
            Je reste à l'affût
          </v-btn>
        </v-card-actions>
      </v-card>
    </div>
  </section>
  <ModalComp v-model="showDialog" :arome-name="selectedAromeName" />
</template>

<script setup>
import fraisetteImg from '@/assets/fraisette.png'
import mentheImg from '@/assets/menthe.png'
import vanillaImg from '@/assets/vanilla.png'
import mirabeauImg from '@/assets/mirabeau.png'
import ModalComp from '@/components/ModalComp.vue'
import { onMounted, ref } from 'vue'
const items = [
  { id: 1, name: 'fraisette', path: fraisetteImg },
  { id: 2, name: 'menthe-la-jolie', path: mentheImg },
  { id: 3, name: 'vanilla', path: vanillaImg },
  { id: 4, name: 'mirabeau', path: mirabeauImg },
]
const selectedAromeName = ref('');
const showDialog = ref(false);

const openDialog = (aromeName) => {
  selectedAromeName.value = aromeName;
  showDialog.value = true;
};

onMounted(() => {
  const observer = new IntersectionObserver((entries) => {
    entries.forEach((entry) => {
      if (window.innerWidth < 768) {
        if (entry.isIntersecting) {
          entry.target.classList.add('arome-animate');
        } else {
          entry.target.classList.remove('arome-animate');
        }
      }
    });
  }, { threshold: 1 });

  document.querySelectorAll('.arome').forEach(el => observer.observe(el));
});
</script>

<style lang="scss" scoped>
$aromes: (
  fraisette: '@/assets/fraisette_hover.png',
  menthe-la-jolie: '@/assets/menthe_hover.png',
  vanilla: '@/assets/vanilla_hover.png',
  mirabeau: '@/assets/mirabeau_hover.png'
);

section {
  .title {
    font-family: 'Playfair Display', serif !important;
    font-size: clamp(24px, 3vw, 40px) !important;
  }
  .subtitle {
    font-family: 'Poppins', sans-serif !important;
    font-size: clamp(14px, 3vw, 20px);
    color: $grey;
  }
  .aromes {
    flex-wrap: wrap;
    gap: 1rem;
  }

  .arome {
    height: 383px;
    width: 332px;
    position: relative;
    overflow: hidden;
    transition: transform 0.2s ease-in-out, opacity 0.2s ease-in-out;

    .title-arome {
      font-family: 'Playfair Display', serif;
      font-size: 24px;
      font-weight: bold;
      color: black;
    }

    img {
      max-height: 263px;
      position: relative;
      z-index: 2;
      transition: transform 0.2s ease-in-out;
    }

    &::before {
      content: '';
      position: absolute;
      top: 0;
      left: 0;
      width: 100%;
      height: 100%;
      background-size: cover;
      opacity: 0; // Démarre invisible
      transition: opacity 0.2s ease-in-out;
      z-index: 1;
    }

    &:hover img, &.arome-animate img {
      transform: scale(1.1);
    }

    &:hover::before, &.arome-animate::before {
      opacity: 1; // Devient visible au survol ou lorsque la classe .arome-animate est ajoutée
    }
  }

  @each $name, $image in $aromes {
    .#{$name}-bg::before {
      background-image: url($image);
    }
  }
}

.fraisette-bg { background-color: $fraisette-bg; }
.menthe-la-jolie-bg { background-color: $mint-bg; }
.vanilla-bg { background-color: $vanilla-bg; }
.mirabeau-bg { background-color: $mirabeau-bg; }

.button {
  font-family: 'Poppins', sans-serif !important;
}

@media (max-width: 768px) {
  .arome::before, .arome img {
    transition: transform 0.2s ease-in-out, opacity 0.2s ease-in-out;
  }

  .arome::before {
    opacity: 0; // Par défaut invisible
  }

  .arome-animate::before {
    opacity: 1; // Visible quand .arome-animate est appliquée
  }

  .arome img {
    transform: scale(1); // Taille normale par défaut
  }

  .arome-animate img {
    transform: scale(1.1); // Agrandie quand .arome-animate est appliquée
  }
}
</style>
