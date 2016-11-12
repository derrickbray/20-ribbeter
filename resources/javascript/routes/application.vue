<template lang="html">
  <div class="">
    <router-view
      :ribbits="ribbits"
      @findAllRibbits="findAllRibbits"
      @saveRibbit="saveRibbit"
      >
    </router-view>
  </div>
</template>

<script>
export default {
  data() {
    return {
      ribbits: [''],
    };
  },

  mounted() {
    this.findAllRibbits();
  },

  methods: {
    findAllRibbits() {
      fetch('/api/ribbits', {
          credentials: 'same-origin',
        })
        .then((r) => r.json())
        .then((ribbits) => {
          this.ribbits = ribbits;
        });
    },

    saveRibbit(input) {
      fetch('/api/ribbits', {
          method: 'POST',
          credentials: 'same-origin',
          headers: {
            'Content-Type': 'application/json'
          },
            body: JSON.stringify(input),
        })
        .then((r) => r.json())
        .then((ribbits) => {
          this.ribbits = [...ribbits, ribbits];
        });
    },
  },
};
</script>
