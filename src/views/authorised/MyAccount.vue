<template>
  <div class="row row-cols-1 row-cols-md-3">
    <ul class="card">
      <li v-for="member in members" :key="member.id" class="m-2">
        <p>ID: {{ user.id }}</p>
        <p>First name: {{ member.firstName }}</p>
        <p>Last name: {{ member.lastName }}</p>
        <p>E-mail: {{ member.eMail }}</p>
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
    ...mapGetters(['members']),
  }
};
</script>

<style scoped>
li {
  list-style-type: none;
}
</style>
