<template>
  <div>
    <!-- Default form register -->
    <form id="regForm" class="border border-light p-5" @submit.prevent="submitForm">
      <p class="text-center h4 mb-4">Register</p>

    <div class="form-row mb-4">
        <!-- <div class="col">
          <label>First Name</label>
          <input v-model="firstName" type="text" class="form-control" />
          <span v-if="!$v.firstName.required && $v.firstName.$dirty" class="text-danger">First Name is required!</span>
          <span v-if="!$v.firstName.alpha && $v.firstName.$dirty" class="text-danger">First Name must be in alpha!</span>
        </div>
       
        <div class="col">
          <label>Last Name</label>
          <input v-model="lastName" type="text" class="form-control" />
          <span v-if="!$v.lastName.required && $v.lastName.$dirty" class="text-danger">Last Name is required</span>
          <span v-if="!$v.lastName.alpha && $v.lastName.$dirty" class="text-danger">Last Name must be in alpha!</span>
        </div> -->
              <!-- Username -->
      <div class="col">
        <label>Displayname</label>
        <input v-model="displayName" class="form-control" />
        <span v-if="!$v.displayName.required && $v.displayName.$dirty" class="text-danger">Displayname is required</span>
          <!-- <span v-if="!$v.displayName.alpha && $v.displayName.$dirty" class="text-danger">Displayname must be in alpha!</span> -->
      </div>
      </div>

      <!-- E-mail -->
      <div class="form-group">
        <label>Email</label>
        <input v-model="email" class="form-control" />
        <span v-if="(!$v.email.required || !$v.email.email) && $v.email.$dirty" class="text-danger">Valid Email is required!</span>
      </div>
      <!-- Password -->
      <div class="form-group">
        <label>Password</label>
        <input v-model="password" type="password" class="form-control" />
        <span v-if="!$v.password.required && $v.password.$dirty" class="text-danger">Password is required!</span>
        <span v-if="(!$v.password.minLength || !$v.password.maxLength) && $v.password.$dirty" class="text-danger">Password must be between {{ $v.password.$params.minLength.min }} and {{ $v.password.$params.maxLength.max }} characters!</span>
      </div>
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
import { required, minLength, maxLength, email } from "vuelidate/lib/validators";

export default {
  name: "Register",
  data() {
    return {
      displayName: '',
      email: '',
      password: '',
    };
  },
  computed: {

  },
  validations: {
    displayName: {
      required,
    },
    email: {
      required,
      email,
    },
    password: {
      required,
      maxLength: maxLength(20),
      minLength: minLength(6),
    },
  },
  methods: {
    ...mapActions(["createUser"]),
    submitForm() {
      this.$v.$touch();
// Get the user info and send it to user.js for auth 
      if (!this.$v.$invalid)
          this.$v.$reset(), 
          console.log(this.displayName),  
          this.createUser({
          displayName: this.displayName,
          email: this.email,
          password: this.password
        })
        .then(() => {
        const resetForm = document.querySelector('#regForm')
        resetForm.reset()
        this.$router.push('/')
        })
        
    },
  },
};
</script>

<style>
</style>