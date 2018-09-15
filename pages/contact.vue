<template>
  <div class="page contact">
    <hero-section :header="header"></hero-section>
    <section class="contact-methods">
      <div class="box box-red hidden" v-in-viewport.once>
        <img :src="methods.officeIcon" alt="">
        <h3>{{ methods.hqHeadline }}</h3>
        <address>
          37000 Grand River Avenue<br>
          Suite #310<br>
          Farmington Hills, MI 48335
        </address>
        <h3>{{ methods.officesHeadline }}</h3>
        <p>
          <span
            v-for="(office, index) in methods.offices"
            :key="index"
          >
            {{ office.location }}
            <span v-if="index + 1 < methods.offices.length">|</span>
          </span>
        </p>
      </div>
      <div class="box box-light-gray hidden" v-in-viewport.once>
        <img :src="methods.contactIcon" alt="">
        <div
          v-for="(method, index) in methods.methods"
          :key="index"
        >
          <h3>{{ method.title }}</h3>
          <a v-if="method.link" :href="method.link">{{ method.text }}</a>
          <p v-else>{{ method.text }}</p>
        </div>
      </div>
      <div class="box box-blue hidden" v-in-viewport.once>
        <img :src="methods.newsletterIcon" alt="">
        <h3>{{ methods.newsletterHeadline }}</h3>
        <p>{{ methods.newsletterDescription }}</p>
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
  async asyncData({ params }) {
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
      title: this.meta.title,
      meta: [
        { hid: 'description', name: 'description', content: this.meta.description },
      ],
    }
  },
};
</script>
