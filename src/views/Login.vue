<template>
  <div>
      <!-- Default form login -->
<form class="text-center border border-light p-5" action="#!">

    <p class="h4 mb-4">Login</p>

    <!-- Email -->
    <input type="email" id="" class="form-control mb-4" placeholder="E-mail">

    <!-- Password -->
    <input type="password" id="" class="form-control mb-4" placeholder="Password">

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
export default {
    name: 'Login',
}
</script>

<style>

</style>