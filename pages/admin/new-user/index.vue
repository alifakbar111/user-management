<template>
  <section class="section">
    <div class="container">
      <AdminUserForm @submit="onSubmitted" />
    </div>
  </section>
</template>

<script>
import AdminUserForm from '@/components/Admin/AdminUserForm'
import axios from "axios";

export default {
  layout: 'admin',
  components: {
    AdminUserForm,
  },
  methods: {
    onSubmitted(userData) {
      this.$store.dispatch('addUser', userData).then(() => {
        this.$router.push('/admin')
      })
    },
  },
}
</script>
