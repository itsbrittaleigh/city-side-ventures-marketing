<template>
  <footer id="footer">
    <div class="primary">
      <div class="container">
        <nuxt-link to="/">
          <img src="~/assets/images/logos/cityside-white.png" alt="" class="logo">
        </nuxt-link>
        <div class="content">
          <nav>
            <ul>
              <span class="logo">
                <li>
                  <nuxt-link to="/about">About</nuxt-link>
                </li>
                <li>
                  <nuxt-link to="/team">The Team</nuxt-link>
                </li>
                <li>
                  <nuxt-link to="/news">News</nuxt-link>
                </li>
                <li>
                  <nuxt-link to="/contact">Contact Us</nuxt-link>
                </li>
                <li>
                  <nuxt-link to="/legal">Legal</nuxt-link>
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
              37000 Grand River Avenue
              <br>
              Suite #310
              <br>
              Farmington Hills, MI 48335
            </address>
            <br>
            <a href="mailto:contact@citysideventures.com">contact@citysideventures.com</a>
            <a href="tel:+12482367005">(248) 236-7005</a>
          </div>
        </div>
      </div>
    </div>
    <div class="secondary">
      <div class="container">
        <p>
          &copy; 2018 copyright and trademark of City Side Ventures LLC. All rights reserved.
        </p>
      </div>
    </div>
  </footer>
</template>

<script>
export default {
  data() {
    return {};
  },
};
</script>
