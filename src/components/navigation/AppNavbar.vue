<template>
<!--Navbar -->
<nav class="mb-1 navbar navbar-expand-lg navbar-dark indigo lighten-1">
  <div class="container">
  <router-link id="logo-li" class="navbar-brand" to="/">Logotype</router-link>
  <button class="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarSupportedContent"
    aria-controls="navbarSupportedContent-555" aria-expanded="false" aria-label="Toggle navigation">
    <span class="navbar-toggler-icon"></span>
  </button>


  <div class="collapse navbar-collapse" id="navbarSupportedContent">
    <ul class="navbar-nav ml-auto">
      <li><router-link class="nav-link nav-item" to="/" exact>Home</router-link></li>
      <li v-if="user"><router-link class="nav-link nav-item" to="/BlogView" exact>Blog</router-link></li>
      <li><router-link class="nav-link nav-item" to="/Chat" exact>Chat</router-link></li>
      <li><router-link class="nav-link nav-item" to="/Products" exact>Products</router-link></li>
      
      <li><router-link class="nav-link nav-item" to="/About" exact>About</router-link></li>
      <!--Login, logout and register -->
      <!-- <li v-if="user"><a class="nav-link nav-item" to="#" @click="signOff">Logout</a></li> -->
      <li v-if="!user"><router-link class="nav-link nav-item" to="/Login" exact>Login</router-link></li>
      <li v-if="!user"><router-link class="nav-link nav-item" to="/Register" exact>Register</router-link></li>
      
      
      
      <li v-if="user" class="nav-item avatar dropdown">
        <a class="nav-link dropdown-toggle p-0 pos-name" to="/MyAccount" id="myDropDown" role="button" data-md-toggle="dropdown" aria-expanded="false">
          {{user.displayName}} <img src="https://mdbootstrap.com/img/Photos/Avatars/avatar-5.jpg" class="rounded-circle z-depth-0 mb-1"
            alt="avatar image" height="35">
        </a>
        <ul class="dropdown-menu" aria-labelledby="navbarDropdown">
          <li v-if="user"><router-link class="dropdown-item" to="/MyAccount" exact>My account</router-link></li>
          <li v-if="user"><a class="dropdown-item" to="#" @click="signOff">Logout</a></li>
        </ul>
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
        this.$router.go({ path: this.$router.path})
        }, 2000)
      }   
    },    
  }

</script>

<style scoped>
.router-link-active{
  font-weight: bolder;
  background-color: rgb(44, 35, 95);
  color: rgb(136, 8, 8);
  border-radius: 2px;
}
#logo-li{
  background-color: transparent;
  color: white;
  font-weight: bolder;
}
.pos-name{
  margin-top: 0.1em;
}
</style>