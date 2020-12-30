<template>
  <section class="section">
    <div class="container">
      <div class="container">
        <h3 class="title is-3">Preview Users</h3>
        <UserList :users="loadedUsers" />
      </div>
    </div>
  </section>
</template>

<script>
import UserList from '@/components/Users/UserList'
export default {
  components: {
    UserList,
  },
  computed: {
    loadedUsers() {
      return this.$store.getters.loadedUsers
    },
  },
}
</script>

<style></style>
