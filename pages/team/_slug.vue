<template>
  <div class="page bio">
    <section class="hero bkg-blue bio-hero">
      <div class="container">
        <h1 class="hidden" v-in-viewport.once>{{ firstName }} {{ lastName }}</h1>
        <p class="large hidden" v-in-viewport.once>
          <em>{{ title }}</em>
        </p>
      </div>
      <div class="overlay"></div>
    </section>

    <div class="bio-grid">
      <aside>
        <img :src="image" alt="" class="avatar hidden" v-in-viewport.once>
        <a :href="`mailto:${email}`" class="email hidden" v-in-viewport.once>
          <div class="overlay"></div>
          <div class="icon-container">
            <img src="~/assets/images/icons/email-outline-black.png" alt="">
          </div>
          <span>
            {{ email }}
          </span>
        </a>
        <a :href="`tel:+12482367005,${phoneExt}`" class="phone hidden" v-in-viewport.once>
          <div class="overlay"></div>
          <div class="icon-container">
            <img src="~/assets/images/icons/phone-white.png" alt="">
          </div>
          <span>
            (248) 236 - 7005 x{{ phoneExt }}
          </span>
        </a>
        <a :href="linkedin" class="linkedin hidden" target="_blank" v-in-viewport.once>
          <div class="overlay"></div>
          <div class="icon-container">
            <img src="~/assets/images/icons/linkedin-white.svg" alt="">
          </div>
          <span>
            LinkedIn
          </span>
        </a>
      </aside>
      <section class="bio">
        <p class="lead hidden" v-in-viewport.once>{{ intro }}</p>
        <!-- {{ content }} -->
        <template v-if="publications">
          <h2 class="hidden" v-in-viewport.once>Blog posts and updates from {{ firstName }} {{ lastName }}</h2>
          <div
            v-for="(publication, index) in publications"
            :key="index"
            class="publication hidden"
            v-in-viewport.once
          >
            <a :href="publication.url"><strong>{{ publication.title }}</strong></a>
            <p>{{ publication.snippet }}</p>
          </div>
        </template>
      </section>
    </div>
  </div>
</template>

<script>
export default {
  async asyncData({ params }) {
    const pageData = await import(`~/content/bios/${params.slug}.json`);
    return pageData;
  }
}
</script>
