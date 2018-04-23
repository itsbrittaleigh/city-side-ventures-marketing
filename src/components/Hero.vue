<template>
  <section class="hero">
    <div class="container">
      <h1>{{ heading }}</h1>
      <p
        v-if="lead"
        class="large"
      >
        <em>{{ lead }}</em>
      </p>
      <p v-if="description">{{ description }}</p>
    </div>
    <div class="overlay"></div>
    <img :src="images[name]" :alt="alt">
  </section>
</template>

<script>
const defaultPhoto = require('../assets/images/covers/detroit.jpg');
const newsPhoto = require('../assets/images/covers/news.jpg');
const aboutPhoto = require('../assets/images/covers/about.jpg');
const blueVenturePhoto = require('../assets/images/covers/blueventure.jpg');
const focusPhoto = require('../assets/images/covers/focus.jpg');
const processPhoto = require('../assets/images/covers/process.jpg');
const venture248Photo = require('../assets/images/covers/venture248.jpg');
const greenseedPhoto = require('../assets/images/covers/greenseed.jpg');
const cashPostPhoto = require('../assets/images/covers/news/cash.jpg');
const dominoPostPhoto = require('../assets/images/covers/news/domino.jpeg');
const newsPostPhoto = require('../assets/images/covers/news/news.jpg');
const pressPostPhoto = require('../assets/images/covers/news/press.jpg');
const savePostPhoto = require('../assets/images/covers/news/save.jpeg');
const weatherPostPhoto = require('../assets/images/covers/news/weather.png');

export default {
  name: 'Hero',
  props: {
    heading: {
      default: '',
    },
    lead: {
      default: '',
    },
    description: {
      default: '',
    },
    name: {
      default: 'default',
    },
    alt: {
      default: 'Skyline of downtown Detroit on a sunny, clear day',
    },
  },
  data() {
    return {
      images: {
        news: newsPhoto,
        default: defaultPhoto,
        about: aboutPhoto,
        blueVenture: blueVenturePhoto,
        focus: focusPhoto,
        process: processPhoto,
        venture248: venture248Photo,
        greenseed: greenseedPhoto,
        newsPost: newsPostPhoto,
        pressPost: pressPostPhoto,
        cashPost: cashPostPhoto,
        weatherPost: weatherPostPhoto,
        savePost: savePostPhoto,
        dominoPost: dominoPostPhoto,
      },
    };
  },
};
</script>

<style lang="scss" scoped>
@import "../assets/styles/components/hero";
</style>

