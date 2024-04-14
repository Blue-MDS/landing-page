<template>
  <section class="d-flex flex-column align-center justify-center my-12 py-12">
    <span class="title font-weight-black mb-2">Rejoins la communauté Blue 😎</span>
      <div class="d-flex flex-column mx-5 mx-md-6">
        <span class="subtitle font-weight-bold text-center">Notre Newsletter</span>
        <v-form @submit.prevent="onSubmit">
          <v-text-field
            v-model="state.email"
            :error-messages="v$.email.$errors.map(e => e.$message)"
            class="mt-6"
            label="Ton email"
            width="368"
            height="54"
            clearable
            required
            variant="outlined"
            @blur="v$.email.$touch"
            @input="v$.email.$touch">
          </v-text-field>
          <v-checkbox 
            v-model="state.checkbox"
            required
            @blur="v$.checkbox.$touch"
            @change="v$.checkbox.$touch"
            label="En t’inscrivant, tu acceptes nos conditions d'utilisation et notre politique de confidentialité."></v-checkbox>
          <v-btn class="text-subtitle-1 button mt-6" :disabled="v$.email.$invalid || !state.checkbox" color="black" height="54" @click="onSubmit">
            S'inscrire
          </v-btn>
        </v-form>
      </div>
    <v-snackbar
      v-model="snackbar"
      :color="snackbarColor"
    >
      {{ text }}

      <template v-slot:actions>
        <v-btn
          variant="text"
          @click="snackbar = false"
        >
          Close
        </v-btn>
      </template>
    </v-snackbar>
  </section>
</template>

<script setup>
import { reactive, ref } from 'vue'
import { useVuelidate } from '@vuelidate/core'
import { email, required } from '@vuelidate/validators'
import axios from 'axios'

const apiURL = import.meta.env.VITE_API_URL
const snackbar = ref(false)
const text = ref('')
const snackbarColor = ref('');
const initialState = {
    email: '',
    checkbox: null,
  }

  const state = reactive({
    ...initialState,
  })

const rules = {
    email: { required, email },
    checkbox: { required },
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
    await axios.post(`${apiURL}/subscribe`, {email: state.email})
    text.value = 'Vous êtes bien inscrit à notre newsletter !';
    snackbarColor.value = 'success'
    clear()
  } catch (error) {
    text.value = 'Une erreur est survenue. Veuillez réessayer plus tard.';
    snackbarColor.value = 'error'
  } finally {
    snackbar.value = true
  }
}

</script>

<style lang="scss" scoped>
.title {
  font-family: 'Playfair Display', serif;
  font-size: clamp(22px, 3vw, 40px);
}
.subtitle {
  font-family: 'Poppins', sans-serif;
  font-size: clamp(16px, 3vw, 20px);
}
.button {
  font-family: 'Poppins', sans-serif !important;
  width: 368px;
}
:deep .v-label {
  max-width: 328px !important;
  font-size: 12px !important;
}

@media (max-width: 768px) {
  .button {
    width: 100%;
  }
}
</style>
