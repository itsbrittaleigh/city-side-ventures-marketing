<template>
  <base-page>
    <template slot="content">
      <hero-section
        heading="Our Focus"
        description="Lorem ipsum dolor sit amet, consectetur adipiscing elit,
          sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.
          Ullamco laboris nisi ut aliquip ex ea commodo consequat."
        name="focus"
      >
      </hero-section>
      <div class="focus">
        <div class="box label box-dark-gray">
          <img src="../assets/images/icons/focus-automotive-white.svg" alt="">
          <p>Automotive Tech</p>
        </div>
        <div class="box content content-gray">
          <h2>Headline</h2>
          <p>
            Lorem ipsum dolor sit amet consectetur, adipisicing elit. Doloribus labore
            quia cum inventore pariatur facere dolorum officia error, quis laudantium
            soluta architecto quas earum laboriosam rem voluptatibus mollitia maiores
            deleniti!
          </p>
        </div>
        <div class="box image">
          <img src="../assets/images/focus/automotive.jpg" alt="">
        </div>
        <div class="box label box-blue">
          <img src="../assets/images/icons/focus-b2b-white.svg" alt="">
          <p>B2B, B2C, &amp; H2H Platforms</p>
        </div>
        <div class="box image">
          <img src="../assets/images/focus/b2b.jpg" alt="">
        </div>
        <div class="box content content-blue">
          <h2>Headline</h2>
          <p>
            Lorem ipsum dolor sit amet consectetur, adipisicing elit. Doloribus labore
            quia cum inventore pariatur facere dolorum officia error, quis laudantium
            soluta architecto quas earum laboriosam rem voluptatibus mollitia maiores
            deleniti!
          </p>
        </div>
        <div class="box label box-yellow">
          <img src="../assets/images/icons/focus-fintech-white.svg" alt="">
          <p>FinTech</p>
        </div>
        <div class="box content content-yellow">
          <h2>Headline</h2>
          <p>
            Lorem ipsum dolor sit amet consectetur, adipisicing elit. Doloribus labore
            quia cum inventore pariatur facere dolorum officia error, quis laudantium
            soluta architecto quas earum laboriosam rem voluptatibus mollitia maiores
            deleniti!
          </p>
        </div>
        <div class="box image">
          <img src="../assets/images/focus/fintech.jpg" alt="">
        </div>
        <div class="box label box-light-gray">
          <img src="../assets/images/icons/focus-wearable-white.svg" alt="">
          <p>Wearable Tech</p>
        </div>
        <div class="box image">
          <img src="../assets/images/focus/wearable.jpg" alt="">
        </div>
        <div class="box content content-light-gray">
          <h2>Headline</h2>
          <p>
            Lorem ipsum dolor sit amet consectetur, adipisicing elit. Doloribus labore
            quia cum inventore pariatur facere dolorum officia error, quis laudantium
            soluta architecto quas earum laboriosam rem voluptatibus mollitia maiores
            deleniti!
          </p>
        </div>
        <div class="box label box-dark-gray">
          <img src="../assets/images/icons/focus-techinmotion-white.svg" alt="">
          <p>Technology in Motion</p>
        </div>
        <div class="box content content-dark-gray">
          <h2>Headline</h2>
          <p>
            Lorem ipsum dolor sit amet consectetur, adipisicing elit. Doloribus labore
            quia cum inventore pariatur facere dolorum officia error, quis laudantium
            soluta architecto quas earum laboriosam rem voluptatibus mollitia maiores
            deleniti!
          </p>
        </div>
        <div class="box image">
          <img src="../assets/images/focus/techmotion.jpg" alt="">
        </div>
        <div class="box label box-yellow">
          <img src="../assets/images/icons/focus-medical-white.svg" alt="">
          <p>Medical &amp; Health</p>
        </div>
        <div class="box image">
          <img src="../assets/images/focus/medical.jpg" alt="">
        </div>
        <div class="box content content-yellow">
          <h2>Headline</h2>
          <p>
            Lorem ipsum dolor sit amet consectetur, adipisicing elit. Doloribus labore
            quia cum inventore pariatur facere dolorum officia error, quis laudantium
            soluta architecto quas earum laboriosam rem voluptatibus mollitia maiores
            deleniti!
          </p>
        </div>
      </div>
    </template>
  </base-page>
</template>

<script>
import Base from './Base';
import Hero from '../components/Hero';

export default {
  name: 'Focus',
  data() {
    return {};
  },
  components: {
    'base-page': Base,
    'hero-section': Hero,
  },
};
</script>

<style lang="scss" scoped>
@import "../assets/styles/variables";
.focus {
  @include grid-boxes(1, 18, 100vw, 100vw, 0);
  h2 {
    @include title-font;
  }
  .box:not(.image) {
    padding: 25px;
    display: flex;
    flex-direction: column;
    &.content {
      justify-content: flex-end;
      padding: 40px;
    }
    &.label {
      justify-content: center;
      align-items: center;
      p {
        font-size: 36px;
        color: $white;
        font-weight: 100;
        text-align: center;
      }
      img {
        height: 100px;
        width: auto;
      }
    }
    &.box-dark-gray {
      background: $cod;
    }
    &.box-yellow {
      background: $goldendream;
    }
    &.box-light-gray {
      background: $gray;
    }
    &.box-blue {
      background: $danube;
    }
    &.content-dark-gray {
      h2 {
        color: $cod;
      }
    }
    &.content-yellow {
      h2 {
        color: $goldendream;
      }
    }
    &.content-light-gray {
      h2 {
        color: $gray;
      }
    }
    &.content-blue {
      h2 {
        color: $danube;
      }
    }
  }
  .box.image {
    img {
      height: 100%;
      width: 100%;
      object-fit: cover;
    }
  }
  @media only screen and (min-width: $medium) {
    @include grid-boxes(3, 6, (100vw / 3), (100vw / 3), 0);
  }
  @media only screen and (min-width: $xxlarge) {
    .box:not(.image) {
      &.content {
        padding: 70px 45px;
      }
    }
  }
}
</style>

