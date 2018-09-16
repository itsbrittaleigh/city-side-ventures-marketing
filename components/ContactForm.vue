<template>
  <div>
    <p v-if="wasSuccessful">Thank you. We received your message and will be in touch shortly.</p>
    <form v-else method="post" @submit.prevent="checkForm" id="contact" class="contact-form" v-in-viewport.once>
      <div class="fields">
        <input type="hidden" name="form-name" value="contact">
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
  </div>
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
      wasSuccessful: false,
    };
  },
  methods: {
    encode(data) {
      return Object.keys(data)
        .map(key => `${encodeURIComponent(key)}=${encodeURIComponent(data[key])}`)
        .join('&');
    },
    submitForm() {
      fetch('/', {
        method: 'POST',
        headers: { 'Content-Type': 'application/x-www-form-urlencoded' },
        body: this.encode({ 'form-name': 'contact', ...this.contact }),
      })
        .then(this.wasSuccessful = true)
        .catch(error => this.errors.push(error));
    },
    checkForm(e) {
      this.errors = [];
      if(!this.contact.name) this.errors['name'] = 'Your name is required';
      if(!this.contact.company) this.errors['company'] = 'Company name is required';
      if(!this.contact.email) this.errors['email'] = 'Email address is required';
      if(!this.contact.phone) this.errors['phone'] = 'Phone number is required';
      if(!this.contact.message) {
        this.errors['message'] = 'A message is required';
      }
      if(this.isEmpty(this.errors)) this.submitForm();
      e.preventDefault();
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
