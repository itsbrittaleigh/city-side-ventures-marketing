<template>
<div class="newsletter-form form-container">
  <!-- Begin MailChimp Signup Form -->
  <div id="mc_embed_signup">
    <form
      action="https://citysideventures.us18.list-manage.com/subscribe/post?u=03ee7dad3e5d26976b6501b49&amp;id=567e4477a2"
      method="post"
      id="mc-embedded-subscribe-form"
      name="mc-embedded-subscribe-form"
      class="validate"
      target="_blank"
      novalidate
    >
      <div id="mc_embed_signup_scroll">
        <div class="mc-field-group">
          <input
            type="email"
            value=""
            name="EMAIL"
            class="required email"
            placeholder="Email address"
            id="mce-EMAIL"
          >
        </div>
        <div id="mce-responses" class="clear">
          <div class="response" id="mce-error-response" style="display:none"></div>
          <div class="response" id="mce-success-response" style="display:none"></div>
        </div>
        <div style="position: absolute; left: -5000px;" aria-hidden="true">
          <input type="text" name="b_03ee7dad3e5d26976b6501b49_567e4477a2" tabindex="-1" value="">
        </div>
        <div class="clear">
          <input
            type="submit"
            value="Submit"
            name="subscribe"
            id="mc-embedded-subscribe"
            class="button"
          >
        </div>
      </div>
    </form>
  </div>
  <!--End mc_embed_signup-->
</div>
</template>

<script>
import axios from 'axios';

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
      const CONFIG = { headers: { 'Content-Type': 'application/x-www-form-urlencoded' } };
      axios.post('', data, CONFIG)
        .then(this.showSuccess = true)
        .catch(this.showError = true);
    },
  },
};
</script>
