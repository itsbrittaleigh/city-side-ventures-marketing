<template>
  <div class="page contact">
    <hero-section
      heading="Contact Us"
      description="Our team of experienced, energetic and passionate serial entrepreneurs,
        know how to execute and do it well. We will go where no investor has gone
        before. Let’s get in touch."
      name="contact"
      color="black"
    >
    </hero-section>

    <section class="contact-methods">
      <div class="box box-red hidden" v-in-viewport.once>
        <img src="~/assets/images/icons/location-pin-white.svg" alt="location pin icon">
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
      <div class="box box-light-gray hidden" v-in-viewport.once>
        <img src="~/assets/images/icons/phone-white.svg" alt="cell phone icon">
        <h3>Phone</h3>
        <a href="tel:+12482367005">(248) 236-7005</a>
        <h3>Email</h3>
        <a href="mailto:contact@citysideventures.com">contact@citysideventures.com</a>
      </div>
      <div class="box box-blue hidden" v-in-viewport.once>
        <img src="~/assets/images/icons/letter-white.svg" alt="email icon" class="news">
        <h3>Newsletter</h3>
        <p>Sign up to receive updates about City Side Ventures</p>
        <newsletter-form></newsletter-form>
      </div>
    </section>

    <div class="bkg-yellow">
      <img src="~/assets/images/home/map-no-dots.svg" alt="">
      <div class="container padded-section">
        <h2 class="hidden" v-in-viewport.once>We would like to hear from you</h2>
        <contact-form></contact-form>
      </div>
    </div>
  </div>
</template>

<script>
import ContactForm from '~/components/ContactForm';
import HeroSection from '~/components/Hero';
import NewsletterForm from '~/components/NewsletterForm';

export default {
  data() {
    return {};
  },
  components: {
    'contact-form': ContactForm,
    'hero-section': HeroSection,
    'newsletter-form': NewsletterForm,
  },
  head() {
    return {
      title: 'Contact | CitySide Ventures',
      meta: [
        { hid: 'description', name: 'description', content: 'Our team of experienced, energetic and passionate serial entrepreneurs, know how to execute and do it well. We will go where no investor has gone before. Let’s get in touch.' },
      ],
    }
  },
};
</script>
