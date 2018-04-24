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
      <button type="submit" class="button button-red">Submit</button>
    </div>
  </form>
</template>

<script>
import axios from 'axios';

export default {
  name: 'ContactForm',
  data() {
    return {
      contact: {
        name: '',
        phone: '',
        email: '',
        company: '',
        message: '',
      },
      showSuccess: false,
    };
  },
  methods: {
    submitForm() {
      const config = { headers: { 'Content-Type': 'application/json' } };
      axios
        .post(
          'https://aiol4k13t1.execute-api.us-east-1.amazonaws.com/prod',
          JSON.stringify(this.contact),
          config,
        )
        .then((this.showSuccess = true));
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
  background: $wildsand;
  border: 1px solid #d7d7d7;
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

