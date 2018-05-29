<template>
  <div class="page">
    <app-header></app-header>
    <main>
      <slot name="content"></slot>
    </main>
    <app-footer></app-footer>
  </div>
</template>

<script>
import Header from '../components/Header';
import Footer from '../components/Footer';

export default {
  name: 'Base',
  data() {
    return {};
  },
  components: {
    'app-header': Header,
    'app-footer': Footer,
  },
};
</script>
