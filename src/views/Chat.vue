<template>
  <div class="row">
    <div class="col">
      <div class="container">
        <div class="card">
          <div class="card-content center-align">
            <form @submit.prevent="enterChat">
              <h4>Enter your name:</h4>
              <input type="text" v-model="name" />
              <p v-if="feedback">{{ feedback }}</p>
              <button class="btn green">Enter Chat</button>
            </form>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  name: "Chat",
  data() {
    return {
      name: null,
      feedback: null,
    };
  },
  methods: {
    enterChat() {
      if (this.name) {
        this.$router.push({ name: "Chat", params: { name: this.name } });
      } else {
          this.feedback = "You must enter a name to join"
      }
    },
  },
};
</script>

<style>
</style>