<template>
  <section :class="`hero bkg-${color} ${name}`">
    <div class="container">
      <h1 class="visible">{{ heading }}</h1>
      <p
        v-if="lead"
        class="large visible"
      >
        <em>{{ lead }}</em>
      </p>
      <p v-if="description" class="visible">{{ description }}</p>
    </div>
    <div class="overlay"></div>
  </section>
</template>

<script>
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
    color: {
      default: 'yellow',
    },
  },
  data() {
    return {};
  },
};
</script>

