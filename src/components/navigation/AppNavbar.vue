<template>
<!--Navbar -->
<nav class="mb-1 navbar navbar-expand-lg navbar-dark bg-dark">
  <div class="container">
  <router-link id="logo-li" class="navbar-brand" to="/">Logotype</router-link>
  <button class="navbar-toggler" type="button" data-mdb-toggle="collapse" data-mdb-target="#navbarRightAlignExample"
    aria-controls="navbarRightAlignExample" aria-expanded="false" aria-label="Toggle navigation">
    <i class="fas fa-bars"></i>
  </button>

<!-- Collapsible wrapper -->
  <div class="collapse navbar-collapse" id="navbarRightAlignExample">
    <ul class="navbar-nav ms-auto mb-2 mb-lg-0">
      <li class="nav-item"><router-link class="nav-link" to="/" exact>Home</router-link></li>
      <li v-if="user" class="nav-item"><router-link class="nav-link" to="/BlogView" exact>Blog</router-link></li>
      <li class="nav-item"><router-link class="nav-link" to="/Chat" exact>Chat</router-link></li>
      <li class="nav-item"><router-link class="nav-link" to="/Products" exact>Products</router-link></li>
      
      <li class="nav-item"><router-link class="nav-link nav-item" to="/About" exact>About</router-link></li>
      <!--Login, logout and register -->
      <!-- <li v-if="user"><a class="nav-link nav-item" to="#" @click="signOff">Logout</a></li> -->
      <li v-if="!user" class="nav-item"><router-link class="nav-link" to="/Login" exact>Login</router-link></li>
      <li v-if="!user" class="nav-item"><router-link class="nav-link" to="/Register" exact>Register</router-link></li>
      
      
      <!-- Navbar dropdown -->
      <li v-if="user" class="nav-item dropdown">
        <a class="nav-link dropdown-toggle p-0 pos-name" to="/MyAccount" id="navbarDropdown" role="button" data-mdb-toggle="dropdown" aria-expanded="false">
          | {{user.displayName}} <img src="https://mdbootstrap.com/img/Photos/Avatars/avatar-5.jpg" class="rounded-circle mb-1"
            alt="avatar image" height="35" loading="lazy">
        </a>
        <!-- Dropdown menu -->
        <ul class="dropdown-menu" aria-labelledby="navbarDropdown">
          <li v-if="user"><router-link class="dropdown-item" to="/MyAccount">My account</router-link></li>
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