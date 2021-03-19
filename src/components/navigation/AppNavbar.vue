<template>
<!--Navbar -->
<nav class="navbar navbar-expand-lg navbar-dark bg-dark" role="navigation">
  <div class="container">
  <router-link id="logo-li" class="navbar-brand" to="/">Logotype</router-link>
  <!-- Toggle button -->
  <button id="myBtn" type="button" class="navbar-toggler" data-mdb-toggle="collapse" data-mdb-target="#navbar1"
    aria-controls="navbar1" aria-expanded="true" aria-label="Toggle navigation">
    <i class="fas fa-bars"></i>
  </button>
  
<!-- Collapsible wrapper -->
  <div class="collapse navbar-collapse mb-lg-0" id="navbar1">
    <ul class="navbar-nav ms-auto mb-2">
      <li @click="closeMenu" class="nav-item"><router-link class="nav-link" to="/" exact> Home</router-link></li>
      <li @click="closeMenu" v-if="user" class="nav-item"><router-link class="nav-link" to="/BlogView" exact>Blog</router-link></li>
      <li @click="closeMenu" class="nav-item"><router-link class="nav-link" to="/Chat" exact>Chat</router-link></li>
      <li @click="closeMenu" class="nav-item"><router-link class="nav-link" to="/Products" exact>Products</router-link></li>
      
      <li @click="closeMenu" class="nav-item"><router-link class="nav-link nav-item" to="/About" exact>About</router-link></li>
      <!--Login, logout and register -->
      <!-- <li v-if="user"><a class="nav-link nav-item" to="#" @click="signOff">Logout</a></li> -->
      <li @click="closeMenu" v-if="!user" class="nav-item"><router-link class="nav-link" to="/Login" exact>Login</router-link></li>
      <li @click="closeMenu" v-if="!user" class="nav-item"><router-link class="nav-link" to="/Register" exact>Register</router-link></li>
      
      
      <!-- Navbar dropdown -->
      <li @click="closeMenu" v-if="user" class=" nav-item dropdown navbar-dark">
        <a class="nav-link dropdown-toggle p-0 pos-name" to="/MyAccount" id="navbarDropdown" role="button" data-mdb-toggle="dropdown" aria-expanded="false">
          | {{user.displayName}} <img src="https://mdbootstrap.com/img/Photos/Avatars/avatar-5.jpg" class="rounded-circle mb-1"
            alt="avatar image" height="35" loading="lazy">
        </a>
        <!-- Dropdown menu -->
        <ul class="dropdown-menu" aria-labelledby="navbarDropdown">
          <li @click="closeMenu" v-if="user"><router-link class="dropdown-item" to="/MyAccount">My account</router-link></li>
          <li @click="closeMenu" v-if="user"><a class="dropdown-item" to="#" @click="signOff">Logout</a></li>
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
    closeMenu() {
      const plopp = document.getElementById('myBtn')
      plopp.click()
    },
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
  background-color: rgb(81, 76, 112);
  color: rgb(255, 255, 255);
  border-radius: 2px;
  padding-left: 10px;
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