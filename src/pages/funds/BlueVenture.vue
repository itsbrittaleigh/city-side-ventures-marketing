<template>
  <base-page>
    <template slot="content">
      <funds-template
        :fund="funds.blueVenture"
      >
      </funds-template>
    </template>
  </base-page>
</template>

<script>
import { mapGetters } from 'vuex';
import Base from '../Base';
import Funds from '../../templates/Funds';

export default {
  name: 'BlueVenture',
  data() {
    return {};
  },
  components: {
    'base-page': Base,
    'funds-template': Funds,
  },
  computed: {
    ...mapGetters([
      'funds',
    ]),
  },
};
</script>
