<template>
  <section class="section">
    <div class="container">
      <AdminUserForm :user="loadedUser" @submit="onSubmitted" />
    </div>
  </section>
</template>

<script>
import AdminUserForm from '@/components/Admin/AdminUserForm'
import axios from 'axios'

export default {
  layout: 'admin',
  components: {
    AdminUserForm,
  },
  asyncData(context) {
    return axios
      .get(process.env.baseUrl + '/users/' + context.params.userId + '.json')
      .then((res) => {
        return {
          loadedUser: { ...res.data, id: context.params.userId },
        }
      })
      .catch((e) => context.error())
  },
  methods: {
    onSubmitted(editedUser) {
      this.$store.dispatch('editUser', editedUser).then(() => {
        this.$router.push('/admin')
      })
    },
  },
}
</script>
