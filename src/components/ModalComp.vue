<template>
  <v-dialog v-model="dialog" persistent>
    <v-card class="text-center justify-center">
      <v-icon class="btn-close" @click="close">mdi-close-circle-outline</v-icon>
      <v-card-title class="text-h5 font-weight-black mb-3">On reste en contact</v-card-title>
      <v-card-subtitle class="mt-3">Tu recevras un email dès que l'arôme sera disponible</v-card-subtitle>
      <v-card-actions class="flex-column flex-md-row justify-center align-start px-4 px-md-0">
        <v-text-field
          class="mr-2"
          label="email"
          type="email"
          variant="outlined">
        </v-text-field>
        <v-btn class="button text-subtitle-1 mr-2" color="black" variant="flat">
          Valider
        </v-btn>
      </v-card-actions>
    </v-card>
  </v-dialog>
</template>

<script setup>
import { ref, watchEffect } from 'vue';

const props = defineProps({
  modelValue: Boolean
});

const emit = defineEmits(['update:modelValue']);
const dialog = ref(props.modelValue);

watchEffect(() => {
  dialog.value = props.modelValue;
});

const close = () => {
  emit('update:modelValue', false);
};

</script>
<style lang="scss" scoped>
.v-dialog {
  max-width: 90% !important;
  .v-card {
    position: relative;
    padding-top: 10% !important;
    padding-bottom: 10% !important;
    height: 630px;
    .v-card-title {
      font-family: 'Playfair Display', serif !important;
      font-size: clamp(24px, 3vw, 40px) !important;
    }
    .v-card-subtitle {
      font-family: 'Poppins', sans-serif !important;
      font-size: clamp(14px, 2vw, 20px) !important;
    }
    .v-card-actions {
      margin-top: 50px;
      .v-btn {
        font-family: 'Poppins', sans-serif !important;
        height: 56px;
        min-width: 220px;
        max-width: 368px;
      }
      .v-input{
        font-family: 'Poppins', sans-serif !important;
        min-width: 220px;
        max-width: 368px;
      }
    }
    .btn-close {
      position: absolute;
      top: 10px;
      right: 10px;
      font-size: 38px;
    }
  }
}
@media (max-width: 960px) {
  .v-dialog {
    .v-card {
      height: 100%;
    }
    .v-card-actions {
      .v-btn, .v-input {
          width: 100%;
          max-width: none !important;
  
        }
    }
  }
}
</style>
