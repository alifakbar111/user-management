<template>
  <section class="section">
    <div class="container">
      <h2 class="title is-2">User Detail</h2>
      <table class="table">
        <tr>
          <th>UserName</th>
          <td>{{ loadedUser.username }}</td>
        </tr>
        <tr>
          <th>Email</th>
          <td>{{ loadedUser.email }}</td>
        </tr>
        <tr>
          <th>Firstname</th>
          <td>{{ loadedUser.firstname }}</td>
        </tr>
        <tr>
          <th>Lastname</th>
          <td>{{ loadedUser.lastname }}</td>
        </tr>
        <tr>
          <th>Last update</th>
          <td>{{ loadedUser.createdDate }}</td>
        </tr>
      </table>
    </div>
  </section>
</template>

<script>
import axios from 'axios'

export default {
  asyncData(context) {
    return axios
      .get(process.env.baseUrl + '/users/' + context.params.id + '.json')
      .then((res) => {
        return {
          loadedUser: { ...res.data, id: context.params.userId },
        }
      })
      .catch((e) => context.error())
  },
}
</script>
