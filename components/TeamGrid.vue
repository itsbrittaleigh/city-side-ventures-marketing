<template>
  <div class="the-team">
    <div class="team-grid" id="team">
      <div
        v-for="(member, index) in team"
        :key="index"
        class="member box visible"
        @click="redirectTo(`${member.firstName.toLowerCase()}-${member.lastName.toLowerCase()}`)"
      >
        <!-- <img :src="member.photo" :alt="member.name"> -->
        <div class="label">
          <p class="name">{{ member.firstName }} {{member.lastName }}</p>
          <p><em>{{ member.title }}</em></p>
        </div>
        <div class="overlay"></div>
      </div>
    </div>
    <div id="quote1" class="box visible">
      <p>We are operational-oriented investors, deploying a high-impact invest-and-build model.</p>
    </div>
    <div id="quote2" class="box visible">
      <p>We are business builders, innovators, disrupters, and game-changing investors.</p>
    </div>
    <div id="quote3" class="box visible">
      <p>We are willing to grind and get our hands dirty; we understand that it takes a village to launch a startup.</p>
    </div>
  </div>
</template>

<script>
export default {
  props: ['team'],
  data() {
    return {};
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
    redirectTo(name) {
      window.location = `/team/${name}`;
    },
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
