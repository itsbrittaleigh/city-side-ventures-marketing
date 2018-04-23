<template>
  <base-page>
    <template slot="content">
      <hero-section
        heading="The Team"
        description="We are active investors full of energy. A savvy tribe of
          entrpreneurs ready to go to work with you in the trenches, in the mud,
          and on the grind. Our managing partners are multi-generational and
          highly diverse with over 100+ years of combined business success."
      >
      </hero-section>
      <div class="team">
        <div
          v-for="(member, index) in team"
          :key="index"
          class="member"
        >
          <img :src="member.photo" :alt="member.name">
          <div :class="`label label-${member.color}`">
            <p class="name">{{ member.name }}</p>
            <p><em>{{ member.title }}</em></p>
          </div>
        </div>
      </div>
    </template>
  </base-page>
</template>

<script>
import { mapGetters } from 'vuex';
import Base from './Base';
import Hero from '../components/Hero';

export default {
  name: 'Team',
  data() {
    return {};
  },
  components: {
    'base-page': Base,
    'hero-section': Hero,
  },
  computed: {
    ...mapGetters([
      'team',
    ]),
  },
};
</script>

<style lang="scss" scoped>
@import "../assets/styles/variables";
.team {
  @include grid-boxes(2, auto, 1fr, 1fr, 0);
  .member {
    @include grid-boxes(1, 2, 1fr, auto, 0);
    img {
      width: 100%;
      height: 200px;
      object-fit: cover;
    }
    .label {
      padding: 40px 20px 20px;
      &.label-yellow {
        background: $goldendream;
      }
      &.label-dark-gray {
        background: $cod;
      }
      &.label-blue {
        background: $danube;
      }
      &.label-light-gray {
        background: $gray;
      }
    }
    p {
      font-size: 12px;
      margin: 0;
      color: $white;
      &.name {
        @include title-font;
      }
    }
  }
  @media only screen and (min-width: $medium) {
    .member {
      img {
        height: 300px;
      }
    }
  }
  @media only screen and (min-width: $large) {
    @include grid-boxes(4, auto, 1fr, 1fr, 0);
  }
}
</style>

