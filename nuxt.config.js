const GLOB = require('glob');
const PATH = require('path');

let dynamicRoutes = getDynamicPaths({
  '/team': '/content/bios/*.json',
  '/news': '/content/posts/*.json',
});

module.exports = {
  head: {
    title: 'Welcome | CitySide Ventures',
    meta: [
      { charset: 'utf-8' },
      { name: 'viewport', content: 'width=device-width, initial-scale=1' },
      { hid: 'description', name: 'description', content: 'City Side Ventures is a driven venture group comprised of experienced business builders, die-hard serial entrepreneurs, disrupters, innovators, and technologists.' },
    ],
    link: [
      { rel: 'icon', type: 'image/png', href: '/favicon.png' },
    ],
  },
  loading: { color: '#5a91cd' },
  generate: {
    routes: dynamicRoutes,
  },
  build: {
    extend(config, { isDev, isClient }) {
      if (isDev && isClient) {
        config.module.rules.push({
          enforce: 'pre',
          test: /\.(js|vue)$/,
          loader: 'eslint-loader',
          exclude: /(node_modules)/,
        });
      }
    },
    vendor: ['v-click-outside', 'vue-in-viewport-directive', 'vue-carousel'],
  },
  plugins: [
    {
      src: '~/plugins/directives/click-outside',
      ssr: false,
    },
    {
      src: '~/plugins/directives/in-viewport',
    },
    {
      src: '~/plugins/vue-carousel',
      ssr: false,
    },
    {
      src: '~/plugins/vue-markdown',
    }
  ],
};

function getDynamicPaths(urlFilepathTable) {
  return [].concat(
    ...Object.keys(urlFilepathTable).map((url) => {
      let filepathGlob = urlFilepathTable[url];
      return GLOB
        .sync(filepathGlob, { cwd: 'content' })
        .map(filepath => `${url}/${PATH.basename(filepath, '.json')}`);
    })
  );
}
