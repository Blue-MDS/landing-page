<template>
  <v-dialog v-model="dialog" persistent>
    <v-card class="text-center justify-center">
      <v-icon class="btn-close" @click="close">mdi-close-circle-outline</v-icon>
      <v-card-title class="text-h5 font-weight-black mb-3">On reste en contact</v-card-title>
      <v-card-subtitle class="mt-3 wrap-text">
        Tu recevras un email dès que l'arôme <span class="font-weight-bold text-uppercase arome-name">{{ props.aromeName }}</span> sera disponible
      </v-card-subtitle>
      <v-card-actions class=" justify-center align-start px-4 px-md-0 mt-4 mt-md-13">
        <v-form class="d-flex flex-column flex-md-row" @submit.prevent="onSubmit">
          <v-text-field
            v-model="state.email"
            :error-messages="v$.email.$errors.map(e => e.$message)"
            class="mr-2"
            label="email"
            clearable
            required
            type="email"
            variant="outlined"
            @blur="v$.email.$touch"
            @input="v$.email.$touch">
          </v-text-field>
          <v-btn class="button text-subtitle-1 mr-2" color="black" variant="flat" :disabled="v$.email.$invalid" @click="onSubmit">
            Valider
          </v-btn>
        </v-form>
      </v-card-actions>
    </v-card>
  </v-dialog>
</template>

<script setup>
import { ref, watchEffect, reactive } from 'vue';
import { useVuelidate } from '@vuelidate/core'
import { email, required } from '@vuelidate/validators'
import axios from 'axios'

const apiURL = import.meta.env.VITE_API_URL
const snackbar = ref(false)
const text = ref('')
const snackbarColor = ref('');
const initialState = {
    email: '',
  }

  const state = reactive({
    ...initialState,
  })

const rules = {
    email: { required, email },
  }

const v$ = useVuelidate(rules, state)

function clear () {
  v$.value.$reset()

  for (const [key, value] of Object.entries(initialState)) {
    state[key] = value
  }
}

const onSubmit = async () => {
  if (v$.value.$invalid) {
    console.log('erreur');
    v$.value.$touch()
    return
  }

  try {
    await axios.post(`${apiURL}/preOrder`, {email: state.email, arome: props.aromeName})
    text.value = 'Tu recevras un email dès que l\'arôme sera disponible.';
    snackbarColor.value = 'success'
    clear()
  } catch (error) {
    text.value = 'Une erreur est survenue. Veuillez réessayer plus tard.';
    snackbarColor.value = 'error'
  } finally {
    snackbar.value = true
  }
}

const props = defineProps({
  modelValue: Boolean,
  aromeName: String
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
      .arome-name {
        font-family: 'Playfair Display', serif !important;
      }
    }
    .v-card-actions {
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
      .wrap-text {
        white-space: normal !important;
      }
    }
    .v-card-actions {
      .v-btn, .v-input {
          width: 100%;
          max-width: none !important;
  
        }
    }
    .btn-close {
      font-size: 20px !important;
    }
  }
}
</style>
