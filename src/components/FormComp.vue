<template>
  <div class="input text-center mx-auto">
    <span class="text-h4 text-md-h3"> Rejoins la communauté Blue</span>
    <p>Laisse ton mail pour rester informer de la suite de notre aventure.</p>
    <v-form v-model="form" class="d-flex flex-column flex-md-row justify-center align-center mt-2 px-4" @submit.prevent="onSubmit">
        <v-text-field
        v-model="email"
      :rules="[required]"
        class="mx-4 w-100"
        type="email"
        rounded="20"
        placeholder="email"
        variant="outlined">
      </v-text-field>
      <v-btn :disabled="!form" type="submit" class="mx-4" rounded>valider</v-btn>
    </v-form>
  </div>
</template>
<script setup>
import { ref } from 'vue';
import axios from 'axios';

const form = ref(false);
const email = ref(null);
const loading = ref(false);
const isSubmitted = ref(false);
const isValid = ref(true);
const apiURL = import.meta.env.VITE_API_URL

const onSubmit = async () => {
  if (!form.value) return;
  try {
    const response = await axios.post(`${apiURL}/subscribe`, { email: email.value });
    console.log(response.data);
    isSubmitted.value = true;
    email.value = '';
    isValid.value = true;
  } catch (error) {
    isSubmitted.value = true;
    isValid.value = false;
  } finally {
    loading.value = false;
  }

  loading.value = true;

  setTimeout(() => {
    loading.value = false;
  }, 2000);
};

const required = v => {
  return !!v || 'Field is required';
};
</script>
<style lang="scss" scoped>
.input {
  max-width: 650px;
}
.v-btn {
  border: 1.5px solid var(--Noir, #00060C);
  border-color: black;
  box-shadow: 4px 4px 0px 0px #00060C;
}
</style>