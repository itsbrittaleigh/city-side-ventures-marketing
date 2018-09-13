<template>
  <section :class="`hero bkg-${color}`">
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
    <img :src="image" alt="">
  </section>
</template>

<script>
export default {
  name: 'Hero',
  props: ['heading', 'lead', 'description', 'color', 'image'],
  data() {
    return {};
  },
};
</script>

