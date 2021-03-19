<template>
<!-- Footer -->
<footer class="font-small bg-dark fixed-bottom">

  <!-- Copyright -->
  <div class="footer-copyright text-center py-3 text-white">
    {{ new Date().getFullYear() }} Copyright:  <a href="#"> excessit.se</a>
    <span class="small ml-4">
        <router-link class="mx-2" to="/about">About</router-link>
        <router-link class="mx-2" to="/integrity">Integrity Agreements</router-link>
    </span>
  </div>
  <!-- Copyright alt + 0169-->

</footer>
<!-- Footer -->
</template>

<script>
export default {
    name: 'AppFooter'
}
</script>

<style>

</style>