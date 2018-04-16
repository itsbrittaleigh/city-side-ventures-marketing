<template>
<div class="form-container">
  <form @submit.prevent="submitForm" id="news">
    <div style="position: absolute; left: -5000px;" aria-hidden="true">
      <input type="text" name="" v-model="hash" tabindex="-1" value="">
    </div>
    <input v-model="email" type="email" name="EMAIL" id="news_email" placeholder="Email address">
    <button type="submit" class="button inverse">Submit</button>
  </form>
  <p v-if="showSuccess">Your message was sent successfully</p>
  <p v-if="showError">There was an error, please try again later.</p>
</div>
</template>

<script>
import axios from 'axios';
import formurlencoded from 'form-urlencoded';

export default {
  name: 'NewsletterForm',
  data() {
    return {
      email: '',
      hash: '',
      showError: false,
      showSuccess: false,
    };
  },
  methods: {
    submitForm(data) {
      const config = { headers: { 'Content-Type': 'application/x-www-form-urlencoded' } };
      axios.post('', formurlencoded(data), config)
        .then(this.showSuccess = true)
        .catch(this.showError = true);
    },
  },
};
</script>

<style lang="scss" scoped>
form {
  display: flex;
  flex-direction: column;
  margin-top: 15px;
  input,
  button {
    height: 40px;
  }
}
</style>

