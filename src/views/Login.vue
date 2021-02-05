<template>
  <div>
      <!-- Default form login -->
<form id="login" class="border border-light p-5" @submit.prevent="loginForm">

    <p class="h4 mb-4">Login</p>

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

    <div class="d-flex justify-content-around">
        <div>
            <!-- Remember me -->
            <div class="custom-control custom-checkbox">
                <input type="checkbox" class="custom-control-input" id="">
                <label class="custom-control-label" for="">Remember me</label>
            </div>
        </div>
        <div>
            <!-- Forgot password -->
            <a href="">Forgot password?</a>
        </div>
    </div>

    <!-- Sign in button -->
    <button class="btn btn-info btn-block my-4" type="submit">ENTER</button>

    <!-- Register -->
    <p>Not a member?
        <router-link class="nav-link nav-item" to="/Register" exact>Register</router-link>
    </p>
</form>
<!-- Default form login -->
  </div>
</template>

<script>
import { mapActions } from "vuex";
import { required, minLength, maxLength, email } from "vuelidate/lib/validators";

export default {
    name: 'Login',
    data() {
        return {
        email: '',
        password: ''
    }
    },
    validations: {
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
    // Get actions from user.js
      ...mapActions(['logInUser']),
      
    loginForm() {
      this.$v.$touch();
// Get the user info and send it to user.js for auth and login
      if (!this.$v.$invalid)
          this.$v.$reset(), 
          console.log(email),  
          this.logInUser({
          email: this.email,
          password: this.password
        })
        .then(() => {
        const resetForm = document.querySelector('#login')
        resetForm.reset()
        this.$router.push('/')
        })
    },
  },
}
</script>

<style>

</style>