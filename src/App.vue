<template>
  <div>
    <app-navbar />
    <div class="container">
    <router-view />
    </div>
    <app-footer />
  </div>
</template>

<script>

import AppNavbar from './components/navigation/AppNavbar'
import AppFooter from './components/navigation/AppFooter'

export default {
  name: 'App',
  components: {
    AppNavbar,
    AppFooter
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
.d-flex {
  display: flex;
}
</style>
