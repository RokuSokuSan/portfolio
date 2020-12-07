<template>
  <div>
      <h1>404</h1>
      <p>Page not found</p>
  </div>
</template>

<script>
export default {
    name: "404",
    created() {
        setTimeout(() => {
            this.$router.push({ path: '/' })
        }, 4000)
    }
}
</script>

<style>

</style>