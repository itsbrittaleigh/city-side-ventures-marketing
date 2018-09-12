<template>
  <form @submit.prevent="checkForm" id="contact" class="hidden contact-form" v-in-viewport.once>
    <div class="fields">
      <div class="field hidden" v-in-viewport.once>
        <label for="name">Your Name</label>
        <input type="text" id="name" name="name" v-model="contact.name">
        <p class="error" v-if="errors.name">** {{ errors.name }}</p>
      </div>
      <div class="field hidden" v-in-viewport.once>
        <label for="company">Company Name</label>
        <input type="text" id="company" name="company" v-model="contact.company">
        <p class="error" v-if="errors.company">** {{ errors.company }}</p>
      </div>
      <div class="field hidden hidden" v-in-viewport.once>
        <label for="phone">Phone Number</label>
        <input type="tel" id="phone" name="phone" v-model="contact.phone">
        <p class="error" v-if="errors.phone">** {{ errors.phone }}</p>
      </div>
      <div class="field hidden" v-in-viewport.once>
        <label for="email">Email Address</label>
        <input type="email" id="email" name="email" v-model="contact.email">
        <p class="error" v-if="errors.email">** {{ errors.email }}</p>
      </div>
      <div class="field hidden" v-in-viewport.once>
        <label for="message">Message</label>
        <textarea name="message" id="message" rows="10" v-model="contact.message"></textarea>
        <p class="error" v-if="errors.message">** {{ errors.message }}</p>
      </div>
      <button type="submit" class="button button-black hidden" v-in-viewport.once>Submit</button>
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
      errors: {},
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
        .then(window.location.href = '/contact/thank-you');
    },
    checkForm(e) {
      this.errors = [];
      if(!this.contact.name) this.errors['name'] = 'Your name is required';
      if(!this.contact.company) this.errors['company'] = 'Company name is required';
      if(!this.contact.email) {
        this.errors['email'] = 'Email address is required';
      } else if(!this.validEmail(this.email)) {
        this.errors['email'] = 'Please use a valid email address';
      }
      if(!this.contact.phone) this.errors['phone'] = 'Phone number is required';
      if(!this.contact.message) {
        this.errors['message'] = 'A message is required';
      }
      if(this.isEmpty(this.errors)) this.submitForm();
      e.preventDefault();
    },
    validEmail(email) {
      let re = /^(([^<>()\[\]\\.,;:\s@"]+(\.[^<>()\[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;
      return re.test(String(email).toLowerCase());
    },
    isEmpty(obj) {
      for (let key in obj) {
        if(obj.hasOwnProperty(key)) {
          return false;
        }
      }
      return true;
    },
  },
};
</script>
