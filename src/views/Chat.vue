<template>
  <div class="card text-center m-5 ">
    <div class="card-header">Welcome to the chat area</div>
    <div class="card-body">
      <div class="card-title ml-4"><p>Enter your name to begin chat:</p></div>
      <form @submit.prevent="enterChat">
        <div>
          <input class="form-control" placeholder="Name" type="text" v-model="name" />
          <label class="form-label">Name</label>
        </div>
        <p v-if="feedback">{{ feedback }}</p>
        <br />
        <button class="btn btn-success ml-4">Enter Chat</button>
      </form>
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
        this.$router.push({ name: "AppChat", params: { name: this.name } });
      } else {
        this.feedback = "You must enter a name to join";
      }
    },
  },
};
</script>

<style scoped>
.form-label{
  position: absolute;
  font-size: 1em;
  color: #aaa;
  display: block;
  opacity: 1;
  transform: translateY(-1.25em);
  transform-origin: 0 0;
  transition: all .3s;
}
.form-control{
  position: relative;
  box-shadow: none;
  background-color:rgb(243, 243, 243);
  border-radius: 0px;
  border-color: #ccc;
  border-style: none none solid none;
  width: 100%;
  transition: all .5s;
  margin: -10px;
}
.form-control::placeholder{
  color: transparent;
}
.form-control:focus{
  box-shadow: none;
  outline: none;
  border-color: lightskyblue;
}
.form-group:focus + .form-label,
.form-control:not(:placeholder-shown) + .form-label{
  transform: translateY(-2.8em) scale(.9);
  margin: -5px;
}
.form-group:focus-within{
  transform:scale(1.05,1.05);
}
</style>