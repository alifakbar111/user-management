<template>
  <section class="section p-0">
    <div class="columns">
      <div class="column is-2 has-background-grey-lighter">
        <Sidebar />
      </div>
      <div class="column">
        <div class="pt-5">
          <h3 class="title is-3">Admin Page</h3>
          <AppButton
            @click="$router.push('/admin/new-user')"
            class="button is-primary"
          >
            Create User
          </AppButton>
          <hr class="my-3" />
          <h3 class="title is-3">Existing User</h3>
          <UserList isAdmin :users="loadedUsers" />
        </div>
      </div>
    </div>
    <!-- <div class="container">
      <h3 class="title is-3">Admin Page</h3>
      <AppButton
        @click="$router.push('/admin/new-user')"
        class="button is-primary"
      >
        Create User
      </AppButton>
      <hr class="my-3" />
      <h3 class="title is-3">Existing User</h3>
      <UserList isAdmin :users="loadedUsers" />
    </div> -->
  </section>
</template>

<script>
import UserList from '@/components/Users/UserList'
import Sidebar from '@/components/UI/Sidebar'
export default {
  layout: 'admin',
  components: {
    UserList,
  },
  computed: {
    loadedUsers() {
      return this.$store.getters.loadedUsers
    },
  },
  // methods: {
  //   onDeleted(deletedUser) {
  //     this.$store.dispatch('deleteUser', deletedUser).then(() => {
  //       this.$router.push('/admin')
  //     })
  //   },
  // },
}
</script>
