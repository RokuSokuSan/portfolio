import Vue from 'vue'
import Vuex from 'vuex'
import { auth } from '../../firebase'
import { vuexfireMutations, firestoreAction } from 'vuexfire'


Vue.use(Vuex)

export default new Vuex.Store({
  state: {
    users: [],
    members: [],
    user: null
  },
  getters: {
    members: state => state.members,
    user: state => state.user,
    users: state => state.users,
  },
  mutations: {
    ...vuexfireMutations,
    ADD_USER: (state, payload) => {
      state.user = payload.user
    }
  },
  actions: {
 
    // createUser: This action creates a new entry for a new user in firebase.
    // It is called from Register.vue
    createUser: firestoreAction((context, payload) => {
      auth.createUserWithEmailAndPassword(payload.email, payload.password)
      .then((userCredentials) => {
        console.log(userCredentials)
        userCredentials.user.updateProfile({
          displayName: payload.displayName
        })
      })
    }),
    logInUser: firestoreAction((context, payload) => {
      auth.signInWithEmailAndPassword(payload.email, payload.password)
      .then(
        user => {
          console.log(user)
          alert(`You are logged in as ${user.displayName}`)
        }
      )
    }),
    deleteUser: firestoreAction((context, payload) => {
      auth.remove(payload.email, payload.password)
    }),
    addUser: ({commit}, user) => {
      commit('ADD_USER', {user})
    },
       //bindUser: This action is to get data from firestore so we can display it in our view.
    // Only to be used when there is a collection created.
    // bindUser: firestoreAction(({ bindFirestoreRef }) => {
    //   return bindFirestoreRef('members', db.collection('members'))
    // }),
  },
})