<template>
  <tr>
    <th>{{ id }}</th>
    <td>
      <nuxt-link :to="userLink">{{ username }}</nuxt-link>
    </td>
    <td>{{ email }}</td>
    <td>{{ password }}</td>
    <td>{{ firstname }}</td>
    <td>{{ lastname }}</td>
  </tr>
</template>

<script>
import AppButton from '@/components/UI/AppButton'

export default {
  name: 'UserPreview',
  components: {
    AppButton,
  },
  props: {
    id: {
      type: String,
      required: true,
    },
    isAdmin: {
      type: Boolean,
      required: true,
    },
    username: {
      type: String,
      required: true,
    },
    email: {
      type: String,
      required: true,
    },
    password: {
      type: String,
      required: true,
    },
    firstname: {
      type: String,
      required: true,
    },
    lastname: {
      type: String,
      required: true,
    },
  },
  // data() {
  //   return {
  //     deletedUser: this.user
  //       ? { ...this.user }
  //       : {
  //           username: '',
  //           email: '',
  //           password: '',
  //           firstname: '',
  //           lastname: '',
  //         },
  //   }
  // },
  computed: {
    userLink() {
      return this.isAdmin ? '/admin/' + this.id : '/users/' + this.id
    },
  },
  // methods: {
  //   onDelete() {
  //     this.$emit('delete', this.deletedUser)
  //   },
  // },
}
</script>
