import Vuex from 'vuex'
import axios from 'axios'

const createStore = () => {
  return new Vuex.Store({
    state: {
      loadedUsers: [],
    },
    mutations: {
      setUsers(state, users) {
        state.loadedUsers = users
      },
      addUser(state, user) {
        state.loadedUsers.push(user)
      },
      editUser(state, editedUser) {
        const userIndex = state.loadedUsers.findIndex(
          (user) => user.id === editedUser.id
        )
        state.loadedUsers[userIndex] = editedUser
      },
      // deleteUser(state, deletedUser) {
      //   console.log('deletedUser ID', deletedUser.id)
      //   const userIndex = state.loadedUsers.findIndex(
      //     (user) => user.id === deletedUser.id
      //   )
      //   state.loadedUsers[userIndex] = deletedUser
      // },
    },
    actions: {
      nuxtServerInit(vuexContext, context) {
        return axios
          .get(process.env.baseUrl + '/users.json')
          .then((res) => {
            const usersArray = []
            for (const key in res.data) {
              usersArray.push({ ...res.data[key], id: key })
            }
            vuexContext.commit('setUsers', usersArray)
          })
          .catch((e) => context.error(e))
      },
      addUser(vuexContext, user) {
        const createdUser = {
          ...user,
          updatedDate: new Date(),
        }
        return axios
          .post(process.env.baseUrl + '/users.json', createdUser)
          .then((result) => {
            vuexContext.commit('addUser', {
              ...createdUser,
              id: result.data.name,
            })
          })
          .catch((e) => console.log(e))
      },
      editUser(vuexContext, editedUser) {
        return axios
          .put(
            process.env.baseUrl + '/users/' + editedUser.id + '.json',
            editedUser
          )
          .then((res) => {
            vuexContext.commit('editUser', editedUser)
          })
          .catch((e) => console.log(e))
      },
      // deleteUser(vuexContext, deletedUser) {
      //   return axios
      //     .delete(
      //       `https://user-mgmt-c46b3-default-rtdb.firebaseio.com/users/${deletedUser.id}`
      //     )
      //     .then((res) => {
      //       vuexContext.commit('deleteUser', deletedUser)
      //     })
      //     .catch((e) => console.log(e))
      // },
      setUsers(vuexContext, users) {
        vuexContext.commit('setUsers', users)
      },
    },
    getters: {
      loadedUsers(state) {
        return state.loadedUsers
      },
      // loadedUser(state) {
      //   return state.loadedUser
      // },
    },
  })
}

export default createStore
