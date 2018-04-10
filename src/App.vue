<template>
  <div id="app" :class="{'menu-open': menuIsOpen}">
    <router-view/>
  </div>
</template>

<script>
import { mapGetters } from 'vuex';

export default {
  name: 'App',
  data() {
    return {};
  },
  computed: {
    ...mapGetters([
      'menuIsOpen',
    ]),
  },
};
</script>

<style lang="scss">
@import './assets/styles/app.scss';
</style>

