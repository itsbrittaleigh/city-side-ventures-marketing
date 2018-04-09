<template>
  <header>
    <navigation-menu></navigation-menu>
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
