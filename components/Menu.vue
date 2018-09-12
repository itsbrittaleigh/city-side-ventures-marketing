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
            :class="{'open': aboutIsOpen}"
            v-click-outside="closeAbout"
          >
            <span class="heading">
              About Us
              <img src="~/assets/images/icons/arrow-down.svg" alt="down arrow">
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
            @click="redirectTo('/services')"
          >
            <a href="/services">Services</a>
          </li>
          <li
            @click="toggleFunds"
            :class="{'open': fundsAreOpen}"
            v-click-outside="closeFunds"
          >
            <span class="heading">
              Investment Funds
              <img src="~/assets/images/icons/arrow-down.svg" alt="down arrow">
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
            @click="redirectTo('/news')"
          >
            <a href="/news">News</a>
          </li>
          <li
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
          <img src="~/assets/images/icons/phone-white.svg" alt="">
          Give us a call
        </a>
      </span>
    </ul>
  </div>
</template>

<script>
export default {
  name: 'Menu',
  data() {
    return {
      aboutIsOpen: false,
      fundsAreOpen: false,
      menuIsMobile: true,
      menuIsOpen: false,
    };
  },
  methods: {
    toggleMenu() {
      this.menuIsOpen = !this.menuIsOpen;
    },
    resizeScreen() {
      this.menuIsMobile = window.innerWidth < 1200;
    },
    closeMenu() {
      this.menuIsOpen = false;
    },
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
  mounted() {
    this.menuIsMobile = window.innerWidth < 1200;
    window.addEventListener('resize', () => {
      this.resizeScreen();
    });
  },
};
</script>
