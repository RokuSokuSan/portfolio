<template>
  <div>
    <app-navbar />

    <router-view />

    <app-footer />
  </div>
</template>

<script>

import AppNavbar from './components/navigation/AppNavbar'
import AppFooter from './components/navigation/AppFooter'
import {auth} from '../firebase'
import { mapActions } from "vuex"

export default {
  name: 'App',
  components: {
    AppNavbar,
    AppFooter
  },

methods: {
    ...mapActions(['addUser'])
  },
  mounted(){
    auth.onAuthStateChanged(user => {
      // If user is signed in.
      if (user) {
        this.addUser(user)
        console.log('User logged in:', user.displayName, '| E-mail:', user.email, '| UserID:', user.uid)
      }else{
        console.log('Successfully logged out')
      }
    })
  }
}
</script>

<style>

*{
  box-sizing: border-box;
  margin: 0;
  padding: 0;
}
.container {
  width: 80%;
  margin: auto;
}
</style>
