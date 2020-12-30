<template>
  <table class="table">
    <thead>
      <tr>
        <th><abbr title="ID">ID</abbr></th>
        <th><abbr title="Username">UName</abbr></th>
        <th><abbr title="Email">Email</abbr></th>
        <th><abbr title="Password">Pwd</abbr></th>
        <th><abbr title="Firstname">FName</abbr></th>
        <th><abbr title="Lastname">LName</abbr></th>
      </tr>
    </thead>
    <tbody>
      <UserPreview
        v-for="user in users"
        :key="user.id"
        :id="user.id"
        :is-admin="isAdmin"
        :email="user.email"
        :firstname="user.firstname"
        :lastname="user.lastname"
        :username="user.username"
        :password="user.password"
      />
    </tbody>
  </table>
</template>

<script>
import UserPreview from '@/components/Users/UserPreview'
export default {
  components: {
    UserPreview,
  },
  props: {
    isAdmin: {
      type: Boolean,
      default: false,
    },
    users: {
      type: Array,
      required: true,
    },
  },
}
</script>
