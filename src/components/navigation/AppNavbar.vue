<template>
<!--Navbar -->
<nav class="mb-1 navbar navbar-expand-lg navbar-dark indigo lighten-1">
  <a class="navbar-brand" href="#">Logotype</a>
  <button class="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarSupportedContent-555"
    aria-controls="navbarSupportedContent-555" aria-expanded="false" aria-label="Toggle navigation">
    <span class="navbar-toggler-icon"></span>
  </button>


  <div class="collapse navbar-collapse" id="navbarSupportedContent-555">
    <ul class="navbar-nav ml-auto">
      <li><router-link class="nav-link nav-item" to="/" exact>Home</router-link></li>
      <li><router-link class="nav-link nav-item" to="/About" exact>About</router-link></li>
      <li><router-link class="nav-link nav-item" to="/BlogView" exact>Blog</router-link></li>
    </ul>
    <ul class="navbar-nav nav-flex-icons">
      <li><router-link class="nav-link nav-item" to="/Login" exact>Login</router-link></li>
      <li class="nav-item avatar">
        <a class="nav-link p-0" href="#">
          <img src="https://mdbootstrap.com/img/Photos/Avatars/avatar-5.jpg" class="rounded-circle z-depth-0"
            alt="avatar image" height="35">
        </a>
      </li>
    </ul>
  </div>

</nav>
<!--/.Navbar -->
</template>

<script>
export default {
    name: 'AppNavbar',
    
}
</script>

<style scoped>
.router-link-active {
  font-weight: bolder;
  background-color: rgb(113, 109, 131);
  color: black;

}
</style>