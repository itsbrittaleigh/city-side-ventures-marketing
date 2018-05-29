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
        <div class="box image automotive">
          <!-- <img src="../assets/images/icons/focus-automotive-white.svg" alt=""> -->
        </div>
        <div class="box label box-blue">
          <img src="../assets/images/icons/focus-b2b-white.svg" alt="">
          <p>B2B, B2C, &amp; H2H Platforms</p>
        </div>
        <div class="box image b2b">
          <!-- <img src="../assets/images/icons/focus-b2b-white.svg" alt=""> -->
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
        <div class="box image fintech">
          <!-- <img src="../assets/images/icons/focus-fintech-white.svg" alt=""> -->
        </div>
        <div class="box label box-light-gray">
          <img src="../assets/images/icons/focus-wearable-white.svg" alt="">
          <p>Wearable Tech</p>
        </div>
        <div class="box image wearable">
          <!-- <img src="../assets/images/icons/focus-wearable-white.svg" alt=""> -->
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
        <div class="box image techmotion">
          <!-- <img src="../assets/images/icons/focus-techinmotion-white.svg" alt=""> -->
        </div>
        <div class="box label box-yellow">
          <img src="../assets/images/icons/focus-medical-white.svg" alt="">
          <p>Medical &amp; Health</p>
        </div>
        <div class="box image medical">
          <!-- <img src="../assets/images/icons/focus-medical-white.svg" alt=""> -->
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
        <div class="box label box-blue">
          <img src="https://fillmurray.com/400/400" alt="">
          <p>Blockchain</p>
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
        <div class="box image blockchain">
          <!-- <img src="../assets/images/icons/focus-b2b-white.svg" alt=""> -->
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
      p {
        margin: 0;
      }
    }
    &.label {
      justify-content: center;
      align-items: center;
      padding: 40px;
      p {
        font-size: 36px;
        margin: 20px 0 0;
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
    min-height: 200px;
    position: relative;
    overflow: hidden;
    &.automotive {
      background: url('../assets/images/focus/automotive.jpg') no-repeat center center;
      background-size: cover;
    }
    &.b2b {
      background: url('../assets/images/focus/b2b.jpg') no-repeat center center;
      background-size: cover;
    }
    &.fintech {
      background: url('../assets/images/focus/fintech.jpg') no-repeat center center;
      background-size: cover;
    }
    &.wearable {
      background: url('../assets/images/focus/wearable.jpg') no-repeat center center;
      background-size: cover;
    }
    &.techmotion {
      background: url('../assets/images/focus/techmotion.jpg') no-repeat center center;
      background-size: cover;
    }
    &.medical {
      background: url('../assets/images/focus/medical.jpg') no-repeat center center;
      background-size: cover;
    }
    &.blockchain {
      background: url('https://fillmurray.com/800/400') no-repeat center center;
      background-size: cover;
    }
    img {
      position: absolute;
      bottom: -30px;
      right: -30px;
      height: 100px;
      width: auto;
      opacity: 0.2;
    }
  }
  @media only screen and (min-width: $medium) {
    @include grid-boxes(3, 6, 1fr, auto, 0);
    .box.image {
      min-height: 400px;
      img {
        bottom: -50px;
        right: -50px;
        height: 250px;
      }
    }
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

