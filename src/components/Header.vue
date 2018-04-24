<template>
  <header>
    <div class="container">
      <router-link :to="{ name: 'Home' }">
        <img src="../assets/images/logos/cityside-black.png" alt="CitySide Ventures logo">
      </router-link>
      <navigation-menu></navigation-menu>
    </div>
  </header>
</template>

<script>
import Menu from './Menu';

export default {
  name: 'Header',
  data() {
    return {};
  },
  components: {
    'navigation-menu': Menu,
  },
};
</script>

<style lang="scss" scoped>
@import "../assets/styles/variables";
header {
  background: $white;
  height: 70px;
  > .container {
    display: flex;
    justify-content: space-between;
    align-items: center;
    @media only screen and (min-width: $large) {
      width: 100%;
      max-width: 100%;
      padding-left: calc((100vw - 962px) / 2); // large width - 30
      justify-content: flex-start;
      .menu {
        margin-left: 30px;
        flex: 1;
      }
    }
    @media only screen and (min-width: $xlarge) {
      padding-left: calc((100vw - 1170px) / 2); // xlarge width - 30
    }
    @media only screen and (min-width: $xxlarge) {
      padding-left: calc((100vw - 1410px) / 2); // xxlarge width - 30
    }
    @media only screen and (min-width: $xxxlarge) {
      padding-left: calc((100vw - 1570px) / 2); // xxxlarge width - 30
    }
  }
  img {
    display: block;
    height: 40px;
    width: auto;
  }
}
</style>

