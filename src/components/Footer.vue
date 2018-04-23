<template>
  <footer>
    <div class="primary">
      <div class="container">
        <router-link :to="{ name: 'Home' }" class="logo">
          <img src="../assets/images/logos/cityside-white.svg" alt="CitySide Ventures logo">
        </router-link>
        <div class="content">
          <nav>
            <ul>
              <span class="logo">
                <li>
                  <router-link :to="{ name: 'About' }">About</router-link>
                </li>
                <li>
                  <router-link :to="{ name: 'Team' }">The Team</router-link>
                </li>
                <li>
                  <router-link :to="{ name: 'News' }">News</router-link>
                </li>
                <li>
                  <router-link :to="{ name: 'Contact' }">Contact Us</router-link>
                </li>
                <li>
                  <router-link :to="{ name: 'Legal' }">Legal</router-link>
                </li>
              </span>
              <span class="logo">
                <li>
                  <a href="https://app.sidepitch.com/auth/register" target="_blank">Pitch Us</a>
                </li>
                <li>
                  <a href="https://app.sidepitch.com/auth/register" target="_blank">Invest with Us</a>
                </li>
              </span>
            </ul>
          </nav>

          <div class="contact-info">
            <h6>Headquarters</h6>
            <address>
              3700 Grand River Avenue
              <br>
              Suite #310
              <br>
              Farmington Hills, MI 48335
            </address>
            <br>
            <a href="mailto:contact@citysideventures.com">contact@citysideventures.com</a>
            <a href="tel:+12484304336">(248) 430-4336</a>
          </div>
        </div>
      </div>
    </div>
    <div class="secondary">
      <div class="container">
        <p>
          &copy; {{ new Date().getFullYear() }} copyright and trademark of City Side Ventures LLC.
          All rights reserved.
        </p>
      </div>
    </div>
  </footer>
</template>

<script>
export default {
  name: 'Footer',
  data() {
    return {};
  },
};
</script>

<style lang="scss" scoped>
@import "../assets/styles/variables";
.primary {
  background: $mineshaft;
  padding: 30px 0;
  .content {
    display: flex;
    justify-content: space-between;
    margin-top: 20px;
  }
}
ul {
  list-style-type: none;
  padding: 0;
  margin: 0;
  li {
    a {
      text-decoration: none;
      color: $goldendream;
      font-size: 14px;
      padding: 10px 0;
      display: block;
    }
  }
}
.contact-info {
  padding-top: 10px;
  h6 {
    color: white;
    font-weight: bold;
    font-size: 12px;
    letter-spacing: 1px;
    text-transform: uppercase;
    margin: 0 0 5px 0;
  }
  address {
    color: white;
    font-size: 12px;
    line-height: 1.8;
    font-style: normal;
  }
  a {
    font-size: 12px;
    color: $white;
    text-decoration: none;
    padding: 5px 0;
    display: block;
  }
}
.secondary {
  padding: 20px 0;
  background: $cod;
  p {
    color: $white;
    font-size: 12px;
    text-align: center;
  }
}
@media only screen and (min-width: $medium) {
  .primary {
    .container {
      display: flex;
      justify-content: center;
    }
    .content {
      margin: 0;
    }
    ul {
      display: flex;
      li {
        a:first-of-type {
          padding-top: 0;
        }
      }
    }
    .contact-info {
      padding-top: 0;
    }
  }
  .logo,
  .nav-left,
  .nav-right {
    margin-right: 40px;
    @media only screen and (min-width: $large) {
      margin-right: 100px;
    }
  }
}
</style>

