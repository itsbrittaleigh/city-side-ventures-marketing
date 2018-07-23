<template>
  <div class="menu">
    <button
      v-if="menuIsMobile"
      @click="toggleMenu()"
    >
      <span></span>
      <span></span>
      <span></span>
      <span></span>
    </button>

    <ul :class="{'base-menu': true, 'open': menuIsOpen}">
      <span class="container">
        <span class="nav-left">
          <li
            @click="toggleAbout"
            :class="{'open': aboutIsOpen, 'router-link-active': aboutIsActive}"
            v-click-outside="closeAbout"
          >
            <span class="heading">
              About Us
              <img src="/assets/images/icons/arrow-down.svg" alt="down arrow">
            </span>
            <ul>
              <li>
                <a href="/about">About City Side</a>
              </li>
              <li>
                <a href="/process">Our Process</a>
              </li>
              <li>
                <a href="/portfolio">Our Portfolio</a>
              </li>
              <li>
                <a href="/focus">Our Focus</a>
              </li>
              <li>
                <a href="/team">The Team</a>
              </li>
            </ul>
          </li>
          <li
            :class="{ 'router-link-active': servicesIsActive }"
            @click="redirectTo('/services')"
          >
            <a href="/services">Services</a>
          </li>
          <li
            @click="toggleFunds"
            :class="{'open': fundsAreOpen, 'router-link-active': fundsAreActive}"
            v-click-outside="closeFunds"
          >
            <span class="heading">
              Investment Funds
              <img src="/assets/images/icons/arrow-down.svg" alt="down arrow">
            </span>
            <ul>
              <li>
                <a href="/funds/great-lakes-angels-fund">Great Lakes Angels Fund</a>
              </li>
              <li>
                <a href="/funds/venture-248">Venture 248 Fund</a>
              </li>
              <li>
                <a href="/funds/blue-venture">Blue Venture Fund</a>
              </li>
              <li>
                <a href="/funds/city-x">City[X]</a>
              </li>
            </ul>
          </li>
          <li
            :class="{ 'router-link-active': newsIsActive }"
            @click="redirectTo('/news')"
          >
            <a href="/news">News</a>
          </li>
          <li
            :class="{ 'router-link-active': contactIsActive }"
            @click="redirectTo('/contact')"
          >
            <a href="/contact">Contact Us</a>
          </li>
        </span>
        <span class="nav-right">
          <li>
            <a href="https://app.sidepitch.com/auth/register" target="_blank" class="button button-blue">Pitch Us</a>
          </li>
          <li>
            <a href="https://app.sidepitch.com/auth/register" target="_blank" class="button button-red">Invest with Us</a>
          </li>
        </span>
      </span>
      <span class="call">
        <a href="tel:+2482367005">
          <img src="/assets/images/icons/phone-white.svg" alt="">
          Give us a call
        </a>
      </span>
    </ul>
  </div>
</template>

<script>
import { mapGetters, mapActions } from 'vuex';
import ClickOutside from 'vue-click-outside';

export default {
  name: 'Menu',
  data() {
    return {
      aboutIsOpen: false,
      fundsAreOpen: false,
    };
  },
  computed: {
    ...mapGetters([
      'menuIsMobile',
      'menuIsOpen',
    ]),
    aboutIsActive() {
      return (
        window.location.pathname === '/about' ||
        window.location.pathname === '/process' ||
        window.location.pathname === '/portfolio' ||
        window.location.pathname === '/focus' ||
        window.location.pathname === '/team'
      );
    },
    fundsAreActive() {
      return (
        window.location.pathname === '/funds/great-lakes-angels-fund' ||
        window.location.pathname === '/funds/blue-venture' ||
        window.location.pathname === '/funds/venture-248' ||
        window.location.pathname === '/funds/city-x'
      );
    },
    newsIsActive() {
      return window.location.pathname.includes('/news');
    },
    contactIsActive() {
      return window.location.pathname === '/contact';
    },
    servicesIsActive() {
      return window.location.pathname === '/services';
    },
  },
  methods: {
    ...mapActions([
      'toggleMenu',
      'resizeScreen',
    ]),
    toggleAbout() {
      this.aboutIsOpen = !this.aboutIsOpen;
    },
    closeAbout() {
      this.aboutIsOpen = false;
    },
    toggleFunds() {
      this.fundsAreOpen = !this.fundsAreOpen;
    },
    closeFunds() {
      this.fundsAreOpen = false;
    },
    redirectTo(location) {
      window.location = location;
    },
  },
  directives: {
    ClickOutside,
  },
  mounted() {
    window.addEventListener('resize', () => {
      this.resizeScreen();
    });
  },
};
</script>

