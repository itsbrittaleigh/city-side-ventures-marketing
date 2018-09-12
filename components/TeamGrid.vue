<template>
  <div class="the-team">
    <div class="team-grid" id="team">
      <div
        v-for="(member, index) in orderedTeam"
        :key="index"
        class="member box hidden"
        @click="redirectTo(member._path)"
        v-in-viewport.once
      >
        <img :src="member.image" :alt="member.title">
        <div class="label">
          <p class="name">{{ member.title }}</p>
          <p><em>{{ member.position }}</em></p>
        </div>
        <div class="overlay"></div>
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
      const boxes = document.getElementsByClassName('box');
      for (let i = 0; i < boxes.length; i += 1) {
        if (this.isEvenRowedOnDesktop(i + 1)) {
          boxes.item(i).classList.add('bkg-offset');
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
    const teamContainer = document.getElementById('team');
    const members = document.getElementsByClassName('member');
    const quote1 = document.getElementById('quote1');
    const quote2 = document.getElementById('quote2');
    const quote3 = document.getElementById('quote3');

    if (this.team.length % 4 === 1) {
      if (this.team.length <= 8) {
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
