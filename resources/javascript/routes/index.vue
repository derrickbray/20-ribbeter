<template lang="html">
  <div class="">

    <div class="register-card">

      <div class="card-container">
        <div class="card__head">
          <h2>Let's Get Started!</h2>
        </div>

        <div class="button">
          {{ form.submit('Login', null, {class: 'btn btn-green'}) }}
          {{ form.submit('Sign Up', null, {class: 'btn btn-green'}) }}
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
