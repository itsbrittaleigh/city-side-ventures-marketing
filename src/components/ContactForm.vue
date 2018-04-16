<template>
  <form @submit.prevent="submitForm" id="contact" class="hidden">
    <div class="fields">
      <div class="field">
        <label for="name">Your Name</label>
        <input type="text" id="name" name="name" v-model="name">
      </div>
      <div class="field">
        <label for="company">Company Name</label>
        <input type="text" id="company" name="company" v-model="company">
      </div>
      <div class="field">
        <label for="phone">Phone Number</label>
        <input type="tel" id="phone" name="phone" v-model="phone">
      </div>
      <div class="field">
        <label for="email">Email Address</label>
        <input type="email" id="email" name="email" v-model="email">
      </div>
      <div class="field">
        <label for="message">Message</label>
        <textarea name="message" id="message" rows="10" v-model="message"></textarea>
      </div>
      <p v-if="showSuccess">Your message was sent successfully</p>
      <p v-if="showError">There was an error, please try again later.</p>
      <button type="submit" class="button">Submit</button>
    </div>
  </form>
</template>

<script>
import axios from 'axios';
import formurlencoded from 'form-urlencoded';

export default {
  name: 'ContactForm',
  data() {
    return {
      name: '',
      phone: '',
      email: '',
      company: '',
      message: '',
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
@import "../assets/styles/variables";
form {
  padding-bottom: 50px;
  position: relative;
}
input,
textarea {
  background: lightgray;
}
button {
  position: absolute;
  bottom: 0;
  right: 0;
}
.fields {
  display: flex;
  flex-wrap: wrap;
  .field {
    width: 100%;
  }
}
@media only screen and (min-width: $medium) {
  .fields {
    justify-content: space-between;
    .field {
      width: calc(50% - 20px);
      &:last-of-type {
        width: 100%;
      }
    }
  }
}
</style>

