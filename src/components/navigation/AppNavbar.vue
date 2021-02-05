<template>
<!--Navbar -->
<nav class="mb-1 navbar navbar-expand-lg navbar-dark indigo lighten-1">
  <div class="container">
  <router-link id="logo-li" class="navbar-brand" to="/">Logotype</router-link>
  <button class="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarSupportedContent-555"
    aria-controls="navbarSupportedContent-555" aria-expanded="false" aria-label="Toggle navigation">
    <span class="navbar-toggler-icon"></span>
  </button>


  <div class="collapse navbar-collapse" id="navbarSupportedContent-555">
    <ul class="navbar-nav ml-auto">
      <li><router-link class="nav-link nav-item" to="/" exact>Home</router-link></li>
      <li v-if="user"><router-link class="nav-link nav-item" to="/BlogView" exact>Blog</router-link></li>
      <li><router-link class="nav-link nav-item" to="/Products" exact>Products</router-link></li>
      <li v-if="user"><router-link class="nav-link nav-item" to="/MyAccount" exact>My account</router-link></li>
      <li><router-link class="nav-link nav-item" to="/About" exact>About</router-link></li>
      <!--Login, logout and register -->
      <li v-if="user"><a class="nav-link nav-item" to="#" @click="signOff">Logout</a></li>
      <li v-if="!user"><router-link class="nav-link nav-item" to="/Login" exact>Login</router-link></li>
      <li v-if="!user"><router-link class="nav-link nav-item" to="/Register" exact>Register</router-link></li>
      <li v-if="user" class="nav-item avatar">
        <a class="nav-link p-0" href="#">
          <img src="https://mdbootstrap.com/img/Photos/Avatars/avatar-5.jpg" class="rounded-circle z-depth-0"
            alt="avatar image" height="35">
        </a>
      </li>
    </ul>
    
  </div>
</div>
</nav>
<!--/.Navbar -->
</template>

<script>
import { mapActions, mapState} from 'vuex'
import Firebase from 'firebase'

export default {
    name: 'AppNavbar',
  computed: mapState(['user']),
  methods: {
    ...mapActions(['addUser']),

      async signOff() {
        await Firebase.auth().signOut()
        this.addUser(null)
        setTimeout(() => {
        this.$router.push({ path: '/' })
        }, 2000)
      }   
    },    
  }

</script>

<style scoped>
.router-link-active{
  font-weight: bolder;
  background-color: rgb(80, 78, 92);
  color: black;
}
#logo-li{
  background-color: transparent;
  color: white;
  font-weight: bolder;

}