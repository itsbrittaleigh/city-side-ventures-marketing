<template>
  <div class="the-team">
    <div class="team-grid" id="team">
      <div
        v-for="(member, index) in orderedTeam"
        :key="index"
        class="member box hidden"
        v-in-viewport.once
      >
        <nuxt-link :to="member._path">
          <img :src="member.image" :alt="member.title">
          <div class="label">
            <p class="name">{{ member.title }}</p>
            <p><em>{{ member.position }}</em></p>
          </div>
          <div class="overlay"></div>
        </nuxt-link>
      </div>
    </div>
    <div id="quote1" class="box">
      <p>We are operational-oriented investors, deploying a high-impact invest-and-build model.</p>
    </div>
    <div id="quote2" class="box">
      <p>We are business builders, innovators, disrupters, and game-changing investors.</p>
    </div>
    <div id="quote3" class="box">
      <p>We are willing to grind and get our hands dirty; we understand that it takes a village to launch a startup.</p>
    </div>
  </div>
</template>

<script>
import _ from 'lodash';

export default {
  props: ['team'],
  data() {
    return {};
  },
  computed: {
    orderedTeam() {
      return _.orderBy(this.team, 'order', 'asc');
    }
  },
  methods: {
    isEvenRowedOnDesktop(index) {
      return (((Math.ceil(index / 4) * 4) % 8) === 0);
    },
    updateColors() {
      const BOXES = document.getElementsByClassName('box');
      for (let i = 0; i < BOXES.length; i += 1) {
        if (this.isEvenRowedOnDesktop(i + 1)) {
          BOXES.item(i).classList.add('bkg-offset');
        }
      }
    },
    redirectTo(path) {
      window.location = path;
    },
    slugify(text) {
      return text.toString().toLowerCase()
        .replace(/\s+/g, '-')           // Replace spaces with -
        .replace(/[^\w\-]+/g, '')       // Remove all non-word chars
        .replace(/\-\-+/g, '-')         // Replace multiple - with single -
        .replace(/^-+/, '')             // Trim - from start of text
        .replace(/-+$/, '');            // Trim - from end of text
    }
  },
  mounted() {
    const TEAM_CONTAINER = document.getElementById('team');
    const MEMBERS = document.getElementsByClassName('member');
    const QUOTE_ONE = document.getElementById('quote1');
    const QUOTE_TWO = document.getElementById('quote2');
    const QUOTE_THREE = document.getElementById('quote3');

    if (this.team.length % 4 === 1) {
      if (this.team.length <= 8) {
        TEAM_CONTAINER.classList += ' restructured';
      } else {
        TEAM_CONTAINER.insertBefore(QUOTE_ONE, MEMBERS[MEMBERS.length - 2]);
        TEAM_CONTAINER.insertBefore(QUOTE_THREE, MEMBERS[10]);
        TEAM_CONTAINER.insertBefore(QUOTE_TWO, MEMBERS[6]);
        this.updateColors();
      }
    } else if (this.team.length % 4 === 2) {
      TEAM_CONTAINER.insertBefore(QUOTE_ONE, MEMBERS[MEMBERS.length - 2]);
      TEAM_CONTAINER.insertBefore(QUOTE_TWO, MEMBERS[6]);
      this.updateColors();
    } else if (this.team.length % 4 === 3) {
      TEAM_CONTAINER.insertBefore(QUOTE_ONE, MEMBERS[MEMBERS.length - 2]);
      this.updateColors();
    }
    this.updateColors();
  },
};
</script>
