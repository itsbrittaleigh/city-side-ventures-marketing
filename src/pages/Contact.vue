<template>
  <base-page>
    <template slot="content">
      <div class="container padded-section">
        <h1>Contact Us</h1>
        <p>
          Our team of experienced, energetic and passionate serial entrepreneurs,
          know how to execute and do it well. We will go where no investor has gone
          before. Let’s get in touch.
        </p>
        <div class="contact-methods">
          <div class="box">
            <img src="https://fillmurray.com/100/100" alt="location pin icon">
            <h3>Headquarters</h3>
            <address>
              37000 Grand River Avenue<br>
              Suite #310<br>
              Farmington Hills, MI 48335
            </address>
            <h3>Offices Worldwide</h3>
            <p>
              Detroit | Palo Alto<br>
              Chicago | Tel Aviv
            </p>
          </div>
          <div class="box">
            <img src="https://fillmurray.com/100/100" alt="cell phone icon">
            <h3>Phone</h3>
            <a href="tel:+12484304336">(248) 430 - 4336</a>
            <h3>Email</h3>
            <a href="mailto:contact@citysideventures.com">contact@citysideventures.com</a>
          </div>
          <div class="box">
            <img src="https://fillmurray.com/100/100" alt="email icon">
            <h3>Newsletter</h3>
            <p>Sign up to receive updates about City Side Ventures</p>
            <newsletter-form></newsletter-form>
          </div>
        </div>
      </div>
      <div class="container padded-section">
        <h2>We would like to hear from you</h2>
        <contact-form></contact-form>
      </div>
    </template>
  </base-page>
</template>

<script>
import Base from './Base';
import NewsletterForm from '../components/NewsletterForm';
import ContactForm from '../components/ContactForm';

export default {
  name: 'Contact',
  data() {
    return {};
  },
  components: {
    'base-page': Base,
    'newsletter-form': NewsletterForm,
    'contact-form': ContactForm,
  },
};
</script>

<style lang="scss" scoped>
@import "../assets/styles/variables";
h1 {
  @include title-font;
  font-size: 53px;
}
h2 {
  margin-bottom: 20px;
}
.container {
  height: auto;
  @media only screen and (min-width: $xlarge) {
    width: 992px;
  }
}
.contact-methods {
  @include grid-boxes(1, 3, 1fr, 1fr, 0);
  .box {
    padding: 150px 30px 30px;
    &:nth-child(1) {
      background: gray;
    }
    &:nth-child(2) {
      background: lightgray;
    }
    &:nth-child(3) {
      background: gray;
    }
    img {
      position: absolute;
      top: 30px;
      left: 30px;
    }
    h3 {
      @include title-font;
      color: white;
      margin: 20px 0 5px;
    }
    p, address, a {
      font-size: 14px;
      font-style: normal;
      color: white;
      text-decoration: none;
      margin: 0;
    }
  }
  @media only screen and (min-width: $medium) {
    @include grid-boxes(3, 1, 1fr, auto, 0);
  }
}
</style>

