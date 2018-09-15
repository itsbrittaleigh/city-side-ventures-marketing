<template>
  <div class="page home">
    <section class="intro">
      <div class="box">
        <div class="container">
          <h1 class="hidden" v-in-viewport.once>{{ header.headline }}</h1>
          <p class="hidden" v-in-viewport.once>{{ header.subhead }}</p>
        </div>
        <img :src="header.image1" alt="">
        <div class="overlay"></div>
      </div>
      <div class="box">
        <div class="container">
          <vue-markdown>{{ header.description }}</vue-markdown>
          <p class="flex">
            <span
              v-for="(type, index) in header.types"
              :key="index"
              class="hidden"
              v-in-viewport.once
            >
              <img class="bullet" src="~/assets/images/icons/bullet-darkgray.svg" alt="">
              {{ type.type }}
            </span>
          </p>
          <nuxt-link to="/about" class="button inverse hidden" v-in-viewport.once>{{ header.buttonText }}</nuxt-link>
        </div>
        <img :src="header.image2" alt="">
        <div class="overlay"></div>
      </div>
    </section>
    <section class="statistics">
      <div class="outer-box">
        <div
          v-for="(statistic, index) in statistics"
          :key="index"
          class="inner-box"
        >
          <div class="box padded hidden" v-in-viewport.once>
            <h2>{{ statistic.title }}</h2>
            <img :src="statistic.chart" alt="">
          </div>
          <div class="box image hidden" v-in-viewport.once>
            <img :src="statistic.image" alt="">
            <div class="overlay hidden" v-in-viewport.once>
              <p class="large">{{ statistic.number }}</p>
              <p class="small">{{ statistic.label }}</p>
            </div>
          </div>
        </div>
      </div>
    </section>
    <section class="focus">
      <div class="container">
        <div class="box hidden" v-in-viewport.once>
          <h2>{{ focus.headline }}</h2>
          <p>
            <vue-markdown>{{ focus.description }}</vue-markdown>
            <nuxt-link to="/focus" class="button inverse">{{ focus.buttonText }}</nuxt-link>
          </p>
        </div>
        <div class="box foci">
          <div
            v-for="(focus, index) in focus.foci"
            :key="index"
            class="box hidden"
            v-in-viewport.once
          >
            <img :src="focus.icon" alt="">
            <p>{{ focus.title }}</p>
          </div>
        </div>
      </div>
    </section>
    <section class="funds">
      <div class="container">
        <div class="box hidden" v-in-viewport.once>
          <h2>{{ investments.headline }}</h2>
          <vue-markdown class="lead">{{ investments.description }}</vue-markdown>
        </div>
        <div class="box hidden" v-in-viewport.once>
          <h3>Great Lakes Angels Fund</h3>
          <p class="lead"><em>Angel Fund</em></p>
          <p class="lead"><em>Pre-Seed Capital</em></p>
          <br>
          <p>
            Great Lakes Angels Fund is an equity-based Angel Fund created to fund and grow early
            stage, tech-based companies.
          </p>
          <nuxt-link to="/funds/great-lakes-angels-fund" class="button button-red">Learn More</nuxt-link>
          <img src="~/assets/images/icons/fund-greenseed-black.svg" alt="">
        </div>
        <div class="box hidden" v-in-viewport.once>
          <h3>Venture (248)</h3>
          <p class="lead"><em>Venture Capital Fund</em></p>
          <p class="lead"><em>Seed Capital</em></p>
          <br>
          <p>
            Venture (248) is an equity-based Venture Capital Fund that was created to
            fund and grow second stage, Michigan-based technology companies.
          </p>
          <nuxt-link to="/funds/venture-248" class="button button-red">Learn More</nuxt-link>
          <img src="~/assets/images/icons/fund-venture248-black.svg" alt="">
        </div>
        <div class="box hidden" v-in-viewport.once>
          <h3>Blue Venture</h3>
          <p class="lead"><em>Venture Capital Fund</em></p>
          <p class="lead"><em>Series A - C</em></p>
          <br>
          <p>
            Blue Venture was established to invest in fast growing, scalable, and
            post-revenue tech companies.
          </p>
          <nuxt-link to="/funds/blue-venture" class="button button-red">Learn More</nuxt-link>
          <img src="~/assets/images/icons/fund-blueventure-black.svg" alt="">
        </div>
        <div class="box hidden" v-in-viewport.once>
          <h3>City[X]</h3>
          <p class="lead"><em>Private Equity Fund</em></p>
          <p class="lead"><em>Growth Capital</em></p>
          <br>
          <p>
            CityX was established to invest in fast growing, scalable, and post-revenue
            tech companies.
          </p>
          <nuxt-link to="/funds/city-x" class="button button-red">Learn More</nuxt-link>
          <img src="~/assets/images/icons/fund-cityx-black.svg" alt="">
        </div>
      </div>
    </section>
    <section class="statistics statistics2">
      <div class="box image-background large padded hidden" v-in-viewport.once>
        <h2>{{ services.headline }}</h2>
        <img :src="services.backgroundImage" alt="">
        <div class="overlay"></div>
        <img :src="services.featuredImage" alt="" class="svg-overlay">
      </div>
      <div class="box">
        <div class="box image hidden" v-in-viewport.once>
          <img :src="services.serviceImage1" alt="">
        </div>
        <div class="box box-yellow hidden" v-in-viewport.once>
          <div
            v-for="(service, index) in services.services.slice(0, Math.floor(services.services.length / 2))"
            :key="index"
            class="service"
          >
            <span>{{ index + 1 }}</span>
            <div class="content">
              <p class="title">{{ service.title }}</p>
              <p>{{ service.description }}</p>
            </div>
          </div>
        </div>
        <div class="box box-blue hidden" v-in-viewport.once>
          <div
            v-for="(service, index) in services.services.slice(Math.floor(services.services.length / 2))"
            :key="index"
            class="service"
          >
            <span>{{ Math.floor(services.services.length / 2) + index + 1 }}</span>
            <div class="content">
              <p class="title">{{ service.title }}</p>
              <p>{{ service.description }}</p>
            </div>
          </div>
        </div>
        <div class="box image hidden" v-in-viewport.once>
          <img :src="services.serviceImage2" alt="">
        </div>
      </div>
    </section>
    <section class="portfolio">
      <div class="box hidden" v-in-viewport.once>
        <div class="container">
          <h2>{{ portfolio.headline }}</h2>
          <vue-markdown>{{ portfolio.description }}</vue-markdown>
          <nuxt-link to="/portfolio" class="button inverse">{{ portfolio.buttonText }}</nuxt-link>
        </div>
      </div>
      <div class="box">
        <div class="upper">
          <div
            v-for="(investment, index) in portfolio.investments.slice(0, Math.floor(portfolio.investments.length / 2))"
            :key="index"
            class="box hidden"
            v-in-viewport.once
          >
            <img :src="investment.logo" alt="">
          </div>
        </div>
        <div class="lower">
          <div
            v-for="(investment, index) in portfolio.investments.slice(Math.floor(portfolio.investments.length / 2))"
            :key="index"
            class="box hidden"
            v-in-viewport.once
          >
            <img :src="investment.logo" alt="">
          </div>
        </div>
      </div>
    </section>
  </div>
</template>

<script>
import VueMarkdown from 'vue-markdown';

export default {
  async asyncData({ params }) {
    const pageData = await import('~/content/pages/index.json');
    return pageData;
  },
  data() {
    return {};
  },
  components: {
    'vue-markdown': VueMarkdown,
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
