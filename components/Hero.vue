<template>
  <section :class="`hero bkg-${header.color}`">
    <div class="container">
      <h1 class="hidden" v-in-viewport.once>{{ header.headline }}</h1>
      <p
        v-if="header.subhead"
        class="large hidden"
        v-in-viewport.once
      >
        <em>{{ header.subhead }}</em>
      </p>
      <p v-if="header.description" class="hidden" v-in-viewport.once>{{ header.description }}</p>
    </div>
    <div class="overlay"></div>
    <img :src="header.image ? header.image : '~/assets/images/covers/team.jpg'" alt="">
  </section>
</template>

<script>
export default {
  name: 'Hero',
  props: ['header'],
  data() {
    return {};
  },
};
</script>

