<template>
  <base-page>
    <template slot="content">
      <hero-section
        heading="The Team"
        description="We are active investors full of energy. A savvy tribe of
          entrpreneurs ready to go to work with you in the trenches, in the mud,
          and on the grind. Our managing partners are multi-generational and
          highly diverse with over 100+ years of combined business success."
        name="team"
      >
      </hero-section>
      <div class="team" id="team">
        <div
          v-for="(member, index) in team"
          :key="index"
          class="member box"
        >
          <img :src="member.photo" :alt="member.name">
          <div class="label">
            <p class="name">{{ member.name }}</p>
            <p><em>{{ member.title }}</em></p>
          </div>
        </div>
      </div>
      <div id="quote1" class="box">
        <p>I am a super interesting quote about stuff.</p>
        <p class="title">Some guy</p>
      </div>
      <div id="quote2" class="box">
        <p>I am a super interesting quote about stuff.</p>
        <p class="title">Some guy</p>
      </div>
      <div id="quote3" class="box">
        <p>I am a super interesting quote about stuff.</p>
        <p class="title">Some guy</p>
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
  methods: {
    isEvenRowedOnDesktop(index) {
      return (((Math.ceil(index / 4) * 4) % 8) === 0);
    },
    updateColors() {
      const boxes = document.getElementsByClassName('box');
      for (let i = 0; i < boxes.length; i += 1) {
        if (this.isEvenRowedOnDesktop(i + 1)) {
          boxes.item(i).classList.add('bkg-offset');
        }
      }
    },
  },
  mounted() {
    const teamContainer = document.getElementById('team');
    const members = document.getElementsByClassName('member');
    const quote1 = document.getElementById('quote1');
    const quote2 = document.getElementById('quote2');
    const quote3 = document.getElementById('quote3');

    if (this.team.length % 4 === 1) {
      if (this.team.length <= 10) {
        teamContainer.classList += ' restructured';
      } else {
        teamContainer.insertBefore(quote1, members[members.length - 2]);
        teamContainer.insertBefore(quote3, members[10]);
        teamContainer.insertBefore(quote2, members[6]);
        this.updateColors();
      }
    } else if (this.team.length % 4 === 2) {
      teamContainer.insertBefore(quote1, members[members.length - 2]);
      teamContainer.insertBefore(quote2, members[6]);
      this.updateColors();
    } else if (this.team.length % 4 === 3) {
      teamContainer.insertBefore(quote1, members[members.length - 2]);
      this.updateColors();
    }
    this.updateColors();
  },
};
</script>

<style lang="scss" scoped>
@import "../assets/styles/variables";
.team {
  @include grid-boxes(2, auto, 1fr, 1fr, 0);
  .box {
    &:nth-child(even) {
      .label {
        background: $danube;
      }
    }
    &:nth-child(odd) {
      .label {
        background: $goldendream;
      }
    }
    &.bkg-offset {
      &:nth-child(even) {
        .label {
          background: $goldendream;
        }
      }
      &:nth-child(odd) {
        .label {
          background: $danube;
        }
      }
    }
  }
  .member {
    @include grid-boxes(1, 2, 1fr, auto, 0);
    img {
      width: 100%;
      height: 200px;
      object-fit: cover;
      filter: grayscale(1.0);
    }
    .label {
      padding: 40px 20px 20px;
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
#quote1,
#quote2,
#quote3 {
  display: none;
  visibility: hidden;
}
@media only screen and (min-width: $medium) {
  #team {
    #quote1,
    #quote2,
    #quote3 {
      display: flex;
      flex-direction: column;
      visibility: visible;
      background: $nightshadz;
      padding: 20px 50px;
      justify-content: center;
      p {
        color: $white;
        font-size: 22px;
        font-weight: 100;
        &.title {
          @include title-font;
        }
      }
    }
  }
}
</style>

