<template>
  <div>
    <!-- Default form register -->
    <form id="regForm" class="border border-light p-5" @submit.prevent="onSubmit">
      <p class="text-center h4 mb-4">Register</p>

      <div class="form-row mb-4">
        <div class="col">
          <!-- First name -->
          <label for="defaultRegisterFormFirstName">First Name</label>
          <input
            v-model="firstName"
            type="text"
            class="form-control"
          />
        </div>
        <div class="col">
          <!-- Last name -->
          <label for="mr-auto">Last Name</label>
          <input
            v-model="lastName"
            type="text"
            class="form-control"
          />
        </div>
      </div>

      <!-- E-mail -->
      <label for="">Email</label>
      <input
        v-model="eMail"
        type="email"
        id="defaultRegisterFormEmail"
        class="form-control mb-4"
      />
      <!-- Password -->
      <label for="defaultRegisterFormPassword mr-auto">Password</label>
      <input
        v-model="password"
        type="password"
        id="defaultRegisterFormPassword"
        class="form-control"
        aria-describedby="defaultRegisterFormPasswordHelpBlock"
      />
      <small
        id="defaultRegisterFormPasswordHelpBlock"
        class="form-text text-muted mb-4"
      >
        At least 8 characters and 1 digit
      </small>
      <!-- Sign up button -->
      <button class="btn btn-info my-4 btn-block" type>Register</button>
      <!-- Terms of service -->
      <p>
        By clicking <em>Register</em> you agree to our
        <a href="" target="_blank">terms of service</a>
      </p>
    </form>
    <!-- Default form register -->
  </div>
</template>

<script>
import { mapActions } from "vuex";

export default {
  name: "Register",
  data() {
    return {
      firstName: "",
      lastName: "",
      eMail: "",
      password: "",
    };
  },
  computed: {},
  methods: {
    ...mapActions(["createUser"]),
    onSubmit() {
      this.createUser({
        firstName: this.firstName,
        lastName: this.lastName,
        eMail: this.eMail,
        password: this.password,
      });
    },
  },
};
</script>

<style>
</style>