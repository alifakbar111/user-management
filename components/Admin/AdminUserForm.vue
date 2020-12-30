<template>
  <form @submit.prevent="onSave">
    <AppControlInput v-model="editedUser.username">Username</AppControlInput>
    <AppControlInput v-model="editedUser.email">Email</AppControlInput>
    <AppControlInput v-model="editedUser.password">Password</AppControlInput>
    <AppControlInput v-model="editedUser.firstname">Firstname</AppControlInput>
    <AppControlInput v-model="editedUser.lastname">Lastname</AppControlInput>
    <br />
    <AppButton type="submit" btn-style="is-primary">Save</AppButton>
    <AppButton type="button" @click="onCancel">Cancle</AppButton>
    <AppButton type="delete" btn-style="is-danger" @click="onDelete"
      >Delete</AppButton
    >
  </form>
</template>

<script>
import AppControlInput from '@/components/UI/AppControlInput'
import AppButton from '@/components/UI/AppButton'
import axios from 'axios'

export default {
  components: {
    AppControlInput,
    AppButton,
  },
  props: {
    user: {
      type: Object,
      required: false,
    },
  },
  data() {
    const user = [this.user]
    console.log('isi User', user)
    return {
      editedUser: this.user
        ? { ...this.user }
        : {
            username: '',
            email: '',
            password: '',
            firstname: '',
            lastname: '',
          },
      deletedUser: this.user,
    }
  },
  methods: {
    onSave() {
      // Save the user
      this.$emit('submit', this.editedUser)
    },
    onCancel() {
      // Navigate back
      this.$router.push('/admin')
    },
    async onDelete() {
      console.log('Delete Work')
      return axios
        .delete(process.env.baseUrl + '/users/' + this.deletedUser.id)
        .then(() => {
          this.$router.push('/admin')
        })
      // this.$emit('delete', this.deletedUser)
    },
  },
}
</script>
