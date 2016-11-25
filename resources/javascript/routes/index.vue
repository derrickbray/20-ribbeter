<template lang="html">
  <div class="">

    <h1 class="page-title">Recent Posts</h1>

    <div class="main">

      <form class="ribbit-card" @submit.prevent="saveRibbit">
        <div class="card-container">

          <div class="card__head card__head-new">
            <h2>New Posts</h2>
          </div>
          <div class="user__card-text index__card-text">
            <div class="user__card-title">What's going on?</div>
            <textarea v-model="content" rows="10" class="ribbit-textarea"></textarea>

          </div>

          <div class="button btn-index">
            <button class="btn-white" type="button" @click="content = ''">Clear</button>
            <button class="btn-green">Save</button>
          </div>
        </div>
      </form>

      <div class="ribbit-card ribbits">
        <div class="card-container">

          <div class="card__head">
            <h2>See What's Happening</h2>
          </div>
          <div class="load">
            <button type="button" name="button" class="load-more" @click="$emit('findAllRibbits')">
              Load New Posts
            </button>
          </div>
          <div class="content-block" v-for="ribbit in ribbits">
            <a href="/users" class="content-user"><h3 class="content-user">@{{ ribbit.author.username }}</h3></a>
            <h4 class="content-text">{{ ribbit.content }}</h4>
          </div>

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
    saveRibbit() {
      this.$emit('saveRibbit', { content: this.content });
      this.content = '';
    }
  },
};
</script>
