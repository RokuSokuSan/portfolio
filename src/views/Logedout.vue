<template>
  <div>
      <!-- <h1>Successfully signed out.</h1>
      <p>redirecting.....</p> -->
  </div>
</template>

<script>
export default {
    name: "Logedout",
    created() {
        setTimeout(() => {
            this.$router.go({ path: this.$router.path })
            alert('Successfully signed out.')
        }, 5000)
    }
}
</script>

<style>

</style>