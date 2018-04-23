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
          >
            <span class="heading" v-click-outside="closeAbout">
              About Us
              <img src="../assets/images/icons/arrow-down.svg" alt="down arrow">
            </span>
            <ul>
              <li>
                <router-link :to="{ name: 'About' }">About City Side</router-link>
              </li>
              <li>
                <router-link :to="{ name: 'Process' }">Our Process</router-link>
              </li>
              <li>
                <router-link :to="{ name: 'Focus' }">Our Focus</router-link>
              </li>
              <li>
                <router-link :to="{ name: 'Team' }">The Team</router-link>
              </li>
            </ul>
          </li>
          <li
            @click="toggleFunds"
            :class="{'open': fundsAreOpen}"
          >
            <span class="heading" v-click-outside="closeFunds">
              Investment Funds
              <img src="../assets/images/icons/arrow-down.svg" alt="down arrow">
            </span>
            <ul>
              <li>
                <router-link :to="{ name: 'Greenseed' }">Greenseed Fund</router-link>
              </li>
              <li>
                <router-link :to="{ name: 'Venture248' }">Venture 248 Fund</router-link>
              </li>
              <li>
                <router-link :to="{ name: 'BlueVenture' }">Blue Venture Fund</router-link>
              </li>
              <li>
                <router-link :to="{ name: 'CityX' }">City[X]</router-link>
              </li>
            </ul>
          </li>
          <li>
            <router-link :to="{ name: 'News' }">News</router-link>
          </li>
          <li>
            <router-link :to="{ name: 'Contact' }">Contact Us</router-link>
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

<style lang="scss" scoped>
@import '../assets/styles/variables.scss';
// hamburger button
button {
  width: 24px;
  height: 18px;
  position: absolute;
  right: 0;
  top: 50%;
  margin-top: -9px;
  transform: rotate(0deg);
  transition: 0.5s ease-in-out;
  z-index: 101;
  border: none;
  background: none;
  padding: 0;
  @media only screen and (min-width: $large) {
    display: none;
    visibility: hidden;
  }
  span {
    display: block;
    position: absolute;
    height: 2px;
    width: 100%;
    background-color: $cod;
    border-radius: 2px;
    opacity: 1;
    left: 0;
    transform: rotate(0deg);
    transition: 0.25s ease-in-out;
    &:nth-child(1) {
      top: 0;
    }
    &:nth-child(2),
    &:nth-child(3) {
      top: 7px;
    }
    &:nth-child(4) {
      top: 14px;
    }
  }
}
.menu-open {
  button {
    span {
      &:nth-child(1) {
        top: 7px;
        width: 0;
        left: 50%;
      }
      &:nth-child(2) {
        transform: rotate(45deg);
      }
      &:nth-child(3) {
        transform: rotate(-45deg);
      }
      &:nth-child(4) {
        top: 7px;
        width: 0;
        left: 50%;
      }
    }
  }
}
// mobile menu dropdown
.base-menu {
  height: 0;
  position: fixed;
  top: 70px;
  left: 0;
  right: 0;
  transition: 0.4s;
  overflow: hidden;
  background: $white;
  margin: 0;
  padding: 0;
  list-style-type: none;
  z-index: 101;
  > .container {
    height: auto;
  }
  &.open {
    height: calc(100vh - 70px);
    overflow-y: scroll;
  }
  li {
    @include title-font;
    color: $cod;
    text-align: right;
    .heading {
      padding: 15px 0;
      display: flex;
      align-items: center;
      justify-content: flex-end;
      font-weight: 500;
      img {
        margin-left: 8px;
        transform: rotate(0);
        transform-origin: top;
        transition: 0.4s;
      }
    }
    a {
      font-weight: 500;
      text-decoration: none;
      color: $cod;
      padding: 15px 0;
      display: block;
      font-size: 12px;
    }
    ul {
      list-style-type: none;
      max-height: 0;
      transform: scaleY(0);
      transform-origin: top;
      transition: 0.4s;
      li {
        text-transform: none;
        a {
          font-weight: 300;
        }
      }
    }
    &.open {
      .heading img {
        transform: rotate(180deg);
      }
      ul {
        max-height: 100vh;
        transform: scaleY(1);
      }
    }
  }
}
// nav-right
.base-menu {
  .nav-right {
    li {
      a {
        height: 44px;
        display: inline-flex;
        align-items: center;
        justify-content: center;
        padding: 0 10px;
        text-transform: uppercase;
        font-weight: bold;
        letter-spacing: 1px;
        color: $white;
        &.button-red:hover {
          color: $nightshadz;
        }
        &.button-blue:hover {
          color: $danube;
        }
      }
      &:nth-child(1) {
        margin-bottom: 15px;
      }
    }
  }
}
// desktop
@media only screen and (min-width: $large) {
  .menu {
    height: 100%;
  }
  .base-menu {
    position: static;
    height: 100%;
    display: flex;
    justify-content: space-between;
    align-items: center;
    overflow: visible;
    > .container {
      display: flex;
      align-items: center;
      justify-content: space-between;
      height: 100%;
      width: 100%;
      flex: 1;
      padding-right: calc((100vw - 962px) / 2);
      @media only screen and (min-width: $xlarge) {
        padding-right: calc((100vw - 1170px) / 2);
      }
    }
    .nav-left {
      display: flex;
      height: 100%;
    }
    li {
      height: 100%;
      text-align: left;
      padding: 0 20px;
      display: flex;
      align-items: center;
      position: relative;
      .heading {
        justify-content: flex-start;
        font-size: 12px;
      }
      a.router-link-active {
        background: $wildsand;
        padding: 0 20px;
      }
      ul {
        position: absolute;
        top: 100%;
        left: 0;
        z-index: 20;
        background: $wildsand;
        padding: 0;
        overflow: visible;
        li {
          width: 200px;
          margin: 0;
          padding: 0;
          transition: 0.3s;
          a {
            width: 100%;
            font-size: 12px;
            padding: 15px 20px;
            transition: 0.4s;
            color: $cod;
            &:hover {
              border-left: 5px solid $gray;
            }
            &.router-link-active {
              padding: 15px 20px;
            }
          }
        }
      }
      a {
        font-size: 12px;
        display: flex;
        align-items: center;
        height: 100%;
        width: 100%;
      }
      &.open {
        background: $wildsand;
      }
    }
    .nav-right {
      display: flex;
      justify-content: space-between;
      li {
        width: 150px;
        margin: 0;
        padding: 0;
        &:first-of-type {
          margin: 0 20px 0 0;
        }
      }
    }
  }
}
</style>

