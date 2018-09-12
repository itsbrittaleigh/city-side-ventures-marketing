<template>
  <div class="page process">
    <hero-section
      heading="Our Process"
      description="City Side provides solutions to find and manage investments for investors
        and corporate ventures using today's technology. With the development of
        our online Venture Management System (VMS), we have automated the process
        of investments from start to finish."
      lead="Business + Technology + Capital = Success"
      name="process"
    >
    </hero-section>

    <div class="sidepitch">
      <div class="box image"></div>
      <div class="box">
        <div class="container">
          <h2 class="hidden" v-in-viewport.once>The Sidepitch Platform</h2>
          <p class="hidden" v-in-viewport.once>
            Sidepitch is a Venture Management System (VMS) platform that is pioneering
            a new category within the financial technology market by leveraging a high-tech
            approach to the traditional venture capital market worldwide.
          </p>
          <div class="step hidden" v-in-viewport.once>
            <img src="~/assets/images/icons/bullet-yellow.svg" alt="">
            <p class="title">Deal flow highlighting the hottest startups</p>
            <p>
              Find, screen, qualify, vet, and select investment opportunities across the
              globe all from one platform from the contingency of your computer.
            </p>
          </div>
          <div class="step hidden" v-in-viewport.once>
            <img src="~/assets/images/icons/bullet-blue.svg" alt="">
            <p class="title">Collaborative Due Diligence For Investors and Startups</p>
            <p>
              Our progressive online platform allows investors to manage their entire
              due-diligence process online, in a dynamic, efficient, and collaborative fashion.
            </p>
          </div>
          <div class="step hidden" v-in-viewport.once>
            <img src="~/assets/images/icons/bullet-light-gray.svg" alt="">
            <p class="title">Syndicated investments with other venture capitalists</p>
            <p>
              Connect with other investors across the globe and build your own private
              syndication online. Built with privacy and confidentiality in mind.
            </p>
          </div>
          <a href="https://sidepitch.com" class="button button-black hidden" target="_blank" v-in-viewport.once>Learn More about Sidepitch</a>
        </div>
      </div>
    </div>

    <section class="process">
      <div class="box">
        <div class="container">
          <h2 class="hidden" v-in-viewport.once>Pitch it. Fund it. Launch it.</h2>
          <p class="hidden" v-in-viewport.once>
            We are business builders&mdash;not just traditional investors.
            We go all in or not at all.
          </p>
          <div class="step step-1 hidden" v-in-viewport.once>
            <img src="~/assets/images/icons/bullet-step-1.svg" alt="">
            <p class="title">The Driver [The Entrepreneur]</p>
            <p class="lead"><em>We invest in drivers, not cars.</em></p>
            <p>We will pick the driver regardless of what kind of car they drive. As long is it is a legal, moral and ethical business, - we are all in!</p>
          </div>
          <div class="step step-2 hidden" v-in-viewport.once>
            <img src="~/assets/images/icons/bullet-step-2.svg" alt="">
            <p class="title">The Car [The Business]</p>
            <p class="lead"><em>Our philosophy is simple.</em></p>
            <p>If you put a great driver in an average car, you will get above average performance. A great driver will perform with any car, at any time, in any race.</p>
          </div>
          <div class="step step-3 hidden" v-in-viewport.once>
            <img src="~/assets/images/icons/bullet-step-3.svg" alt="">
            <p class="title">The Race [The Market]</p>
            <p class="lead"><em>Finishing the Race.</em></p>
            <p>We can fix or suit up the car. We are not "Industry" focused we are "Driver" focused. Find the driver, fix him a car, and get him in the race.</p>
          </div>
        </div>
      </div>
      <div class="box image"></div>
    </section>
  </div>
</template>

<script>
import HeroSection from '~/components/Hero.vue';

export default {
  data() {
    return {};
  },
  components: {
    'hero-section': HeroSection,
  },
  head() {
    return {
      title: 'Our Process | CitySide Ventures',
      meta: [
        { hid: 'description', name: 'description', content: 'CitySide provides solutions to find and manage investments for investors and corporate ventures using today\'s technology. With the development of our online Venture Management System (VMS), we have automated the process of investments from start to finish.' },
      ],
    }
  },
};
</script>
