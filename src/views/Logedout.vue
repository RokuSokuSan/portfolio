<template>
  <div>
      <h1>Successfully signed out.</h1>
      <p>redirecting.....</p>
  </div>
</template>

<script>
export default {
    name: "Logedout",
    created() {
        setTimeout(() => {
            this.$router.push({ path: '/' })
        }, 5000)
    }
}
</script>

<style>

</style>