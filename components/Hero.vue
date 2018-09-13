<template>
  <section :class="`hero bkg-${color}`">
    <div class="container">
      <h1 class="hidden" v-in-viewport.once>{{ heading }}</h1>
      <p
        v-if="lead"
        class="large hidden"
        v-in-viewport.once
      >
        <em>{{ lead }}</em>
      </p>
      <p v-if="description" class="hidden" v-in-viewport.once>{{ description }}</p>
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

