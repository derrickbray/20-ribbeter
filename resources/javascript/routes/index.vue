<template lang="html">
  <div class="">

    <h1 class="page-title">Ribbits</h1>

    <div class="main">

      <form class="ribbit-card" @submit.prevent="$emit('saveRibbit', { content: content })">
        <div class="card-container">

          <div class="card__head">
            <h2>New Ribbits</h2>
          </div>
          <div class="user__card-text index__card-text">
            <div class="user__card-title">What's going on?</div>
            <textarea v-model="content" rows="10" class="ribbit-textarea"></textarea>

          </div>

          <div class="button btn-index">
            <button class="btn-white" type="button" @click="content = ''">Cancel</button>
            <button class="btn-green">Save</button>
          </div>
        </div>
      </form>

      <div class="ribbit-card ribbits">
        <div class="card-container">

          <div class="card__head">
            <h2>See What's Happening</h2>
          </div>
          <h1>hello</h1>


        </div>
      </div>

    </div>

  </div>
</template>

<script>
export default {
  props: ['ribbits'],
  data() {
    return {
      content: '',
    };
  },

  methods: {

  },
};
</script>
