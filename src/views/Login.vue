<template>
  <div class="d-flex login-form justify-content-center">
      <!-- Default form login -->
<form id="login" class="border border-light p-5 w-100" @submit.prevent="loginForm">

    <p class="text-center h4 mb-4">Sign in</p>

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

    <div>
        <div>
            <!-- Remember me -->
            <div class="custom-control custom-checkbox">
                <input type="checkbox" class="custom-control-input" id="">
                <label class="custom-control-label m-2" for="">Remember me</label>
            </div>
        </div>
        <div>
            <!-- Forgot password -->
            <a href="">Forgot password?</a>
        </div>
    </div>

    <!-- Sign in button -->
    <button class="btn btn-info ml-4 my-2" type="submit">ENTER</button>

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
        password: '',
        displayName: ''
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
          password: this.password,
          displayName: this.displayName
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

<style scoped>
  .login-form form {
    max-width: 400px;
    
  }
</style>

