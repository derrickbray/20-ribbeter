<template lang="html">
  <div class="">

    <h1 class="page-title">Ribbits</h1>

    <div class="main">

      <div class="ribbit-card">
        <div class="card-container">

          <div class="card__head">
            <h2>New Ribbits</h2>
          </div>
          <div class="user__card-text">
            <div class="user__card-title">What's going on?</div>
            <textarea v-model="content" rows="10" class="ribbit-textarea"></textarea>

          </div>

          <div class="button">
            <a href="/register" class="btn-white">Sign Up</a>
            {{ form.submit('app', null, {class: 'btn-green'}) }}
          </div>

        </div>
      </div>

      <div class="ribbit-card ribbits">
        <div class="card-container">

          <div class="card__head">
            <h2>See What's Happening</h2>
          </div>



        </div>
      </div>

    </div>

  </div>
</template>

<script>
export default {

  data() {
    return {
    };
  },

  methods: {

  },
};
</script>
