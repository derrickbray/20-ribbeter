<template lang="html">
  <div class="">
    <router-view
      :ribbits="ribbits"
      @findAllRibbits="findAllRibbits">
    </router-view>
  </div>
</template>

<script>


export default {
  data() {
    return {
      ribbits: [],
    };
  },

  mounted() {
  this.findAllRibbits();
},

  methods: {
    findAllRibbits() {
        fetch('/api/ribbits', {
          method: 'POST',
          credentials: 'same-origin',
        })
          .then((r) => r.json())
          .then((ribbits) => {
            this.ribbits = ribbits;
          });
      },

    getRibbits() {
      fetch('/api/ribbits')
        .then((r) => r.json())
        .then((ribbits) => {
          this.ribbits = ribbits;
      });
  },
};
</script>
