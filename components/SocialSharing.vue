<template>
  <div
    :class="`network icon ${network}`"
    :aria-label="`share via ${network}`"
    @click="determineWhichClickEvent()"
  >
  </div>
</template>

<script type="text/babel">
/**
 * code inspired by
 * @link https://github.com/nicolasbeauvais/vue-social-sharing
 */
export default {
  props: {
    network: {
      type: String,
      default: ''
    }
  },
  data() {
    return {
      sharer: '',
      /**
       * Type of sharing (default or direct)
       */
      type: 'popup',
      /**
       * URL to share
       */
      url: '',
      /**
       * Sharing title
       */
      title: '',
      /**
       * Sharing description
       */
      description: '',
      /**
       * Twitter username
       */
      twitter_user: 'argonomohq',
      /**
       * Default popup settings
       */
      popup_settings: {
        status: false,
        resizable: true,
        toolbar: false,
        menubar: false,
        scrollbars: false,
        location: false,
        directories: false,
        width: 626,
        height: 436,
        top: 0,
        left: 0,
        window: undefined,
        interval: null
      },
      socialSharing: {
        facebook: {
          base: 'https://www.facebook.com/sharer/sharer.php?u=@url&title=@title&description=@description',
          type: 'popup'
        },
        linkedin: {
          base: 'https://www.linkedin.com/shareArticle?mini=true&url=@url&title=@title&summary=@description',
          type: 'popup'
        },
        twitter: {
          base: 'https://twitter.com/intent/tweet?text=@title&url=@url@twitteruser',
          type: 'popup'
        },
        whatsapp: {
          base: 'whatsapp://send?text=@description%0D%0A@url',
          type: 'direct',
          action: 'share/whatsapp/share'
        },
        email: {
          base: 'mailto:?subject=@title&body=@url%20@description',
          type: ''
        },
      },
    };
  },
  methods: {
    setShareUrlBase() {
      this.sharer = this.socialSharing[this.network].base;
    },
    setType() {
      this.type = this.socialSharing[this.network].type;
    },
    setTitle() {
      let meta_title = document.querySelector('title');
      this.title = meta_title != null ? meta_title.innerText : this.title;
    },
    setDescription() {
      let meta_description = document.querySelector('meta[name="description"]');
      this.description = meta_description != null ? meta_description.getAttribute('content') : this.description;
    },
    createSharingUrl() {
      this.sharer = this.socialSharing[this.network].base
        .replace(/@url/g, encodeURIComponent(this.url))
        .replace(/@title/g, encodeURIComponent(this.title))
        .replace(/@description/g, encodeURIComponent(this.description))
        .replace(/@twitteruser/g, this.twitter_user ? '&via=' + this.twitter_user : '');
      return this.sharer;
    },
    determineWhichClickEvent() {
      if(this.type === 'popup') this.popup();
      else this.direct();
    },
    popup() {
      this.popup_settings.window = window.open(
        this.sharer,
        'sharer',
        'status='       + ( this.popup_settings.status ? 'yes' : 'no' ) +
        ',height='      +   this.popup_settings.height +
        ',width='       +   this.popup_settings.width  +
        ',resizable='   + ( this.popup_settings.resizable ? 'yes' : 'no' ) +
        ',left='        +   this.popup_settings.left +
        ',top='         +   this.popup_settings.top  +
        ',screenX='     +   this.popup_settings.left +
        ',screenY='     +   this.popup_settings.top  +
        ',toolbar='     + ( this.popup_settings.toolbar     ? 'yes' : 'no' ) +
        ',menubar='     + ( this.popup_settings.menubar     ? 'yes' : 'no' ) +
        ',scrollbars='  + ( this.popup_settings.scrollbars  ? 'yes' : 'no' ) +
        ',location='    + ( this.popup_settings.location    ? 'yes' : 'no' ) +
        ',directories=' + ( this.popup_settings.directories ? 'yes' : 'no' )
      );
      this.popup_settings.window.focus();
    },
    direct() {
      window.open(this.createSharingUrl(), '_self');
    }
  },
  mounted() {
    this.url = window.location.href;
    this.setShareUrlBase();
    this.setType();
    this.setTitle();
    this.setDescription();
    this.createSharingUrl();
  }
}
</script>