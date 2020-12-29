<template>
  <div class="row row-cols-1 row-cols-md-3">
    <ul class="card">
      <li v-for="user in users" :key="user.id" class="m-2">
        <p>ID: {{ user.id }}</p>
        <p>First name: {{ user.firstName }}</p>
        <p>Last name: {{ user.lastName }}</p>
        <p>E-mail: {{ user.eMail }}</p>
      </li>
    </ul>
  </div>
</template>

<script>
import { mapGetters } from "vuex";

export default {
  name: "MyAccount",
  data() {
    return {
      db: [],
    };
  },
  computed: {
    ...mapGetters(['users']),
  }
};
</script>

<style scoped>
li {
  list-style-type: none;
}
</style>
