<template>
  <div
    class="network icon link"
    aria-label="share via link"
    @click="copyToClipboard()"
  >
    <p v-if="copied">Copied!</p>
  </div>
</template>

<script>
export default {
  name: 'CopyToClipboard',
  props: {
    copyData: {
      default: window.location.href,
    },
  },
  data() {
    return {
      copied: false,
    };
  },
  methods: {
    copyToClipboard() {
      window.clipboardData.setData('Text', this.copyData);
      this.copied = true;
    },
  },
};
</script>
