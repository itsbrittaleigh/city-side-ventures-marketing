<template>
  <div class="page contact">
    <hero-section :header="header"></hero-section>
    <section class="contact-methods">
      <div class="box box-red hidden" v-in-viewport.once>
        <img :src="officeIcon" alt="">
        <h3>{{ hqHeadline }}</h3>
        <address>
          37000 Grand River Avenue<br>
          Suite #310<br>
          Farmington Hills, MI 48335
        </address>
        <h3>{{ officesHeadline }}</h3>
        <p>
          <span
            v-for="(office, index) in offices"
            :key="index"
          >
            {{ office.location }}
            <span v-if="index + 1 < offices.length">|</span>
          </span>
        </p>
      </div>
      <div class="box box-light-gray hidden" v-in-viewport.once>
        <img :src="contactIcon" alt="">
        <div
          v-for="(method, index) in methods"
          :key="index"
        >
          <h3>{{ method.title }}</h3>
          <a v-if="method.link" :href="method.link">{{ method.text }}</a>
          <p v-else>{{ method.text }}</p>
        </div>
      </div>
      <div class="box box-blue hidden" v-in-viewport.once>
        <img :src="newsletterIcon" alt="">
        <h3>{{ newsletterHeadline }}</h3>
        <p>{{ newsletterDescription }}</p>
        <newsletter-form></newsletter-form>
      </div>
    </section>

    <div class="bkg-yellow">
      <img src="~/assets/images/home/map-no-dots.svg" alt="">
      <div class="container padded-section">
        <h2 class="hidden" v-in-viewport.once>{{ formHeadline }}</h2>
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
  async asyncData({ params}) {
    const pageData = await import('~/content/pages/contact.json');
    return pageData;
  },
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
