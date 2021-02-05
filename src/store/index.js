import Vue from 'vue'
import Vuex from 'vuex'
import { auth } from '../../firebase'
import { vuexfireMutations, firestoreAction } from 'vuexfire'


Vue.use(Vuex)

export default new Vuex.Store({
  state: {
    users: [],
    user: null
  },
  getters: {
    users: state => state.users,
    user: state => state.user,
  },
  mutations: {
    ...vuexfireMutations,
    ADD_USER: (state, payload) => {
      state.user = payload.user
    }
  },
  actions: {
    //bindUser: This action is to get data from firestore so we can display it in our view.
    // Only to be used when there is a collection created.
    // bindUser: firestoreAction(({ bindFirestoreRef }) => {
    //   return bindFirestoreRef('users', db.collection('users'))
    // }),
    // createUser: This action creates a new entry for a new user in firebase.
    // It is called from Register.vue
    createUser: firestoreAction((context, payload) => {
      auth.createUserWithEmailAndPassword(payload.email, payload.password)
      .then(
        this.user.updateProfile({
          firstName: payload.firstName,
          lastname: payload.lastName,
          displayName: payload.displayName
        })
      )
    }),
    logInUser: firestoreAction((context, payload) => {
      auth.signInWithEmailAndPassword(payload.email, payload.password)
      .then(
        user => {
          alert(`You are logged in as ${user.email}`)
        }
      )
    }),
    deleteUser: firestoreAction((context, payload) => {
      auth.remove(payload.email, payload.password)
    }),
    addUser: ({commit}, user) => {
      commit('ADD_USER', {user})
    }
  },
})