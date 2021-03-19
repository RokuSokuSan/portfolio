import Vue from 'vue'
import Vuex from 'vuex'
import { db, auth } from '../../firebase'
import { vuexfireMutations, firestoreAction } from 'vuexfire'


Vue.use(Vuex)

export default new Vuex.Store({
  state: {
    users: [],
    registered: [],
    user: null,
    messages: [],
  },
  getters: {
    registered: state => state.registered,
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
    //Chat function loadMessages
    loadMessages: firestoreAction(context => {
      context.bindFirestoreRef('messages', db.collection('messages').orderBy('timestamp'))
    }),
    //bindUser: This action is to get data from firestore so we can display it in our view.
    // Only to be used when there is a collection created.
    bindUser: firestoreAction(({ bindFirestoreRef }) => {
      return bindFirestoreRef('registered', db.collection('registered'))
    }),
    // createUser: This action creates a new entry for a new user in firebase Auth.
    // then we set the UID to match the member subscription
    // It is called from Register.vue
    createUser: firestoreAction((context, payload) => {
      auth.createUserWithEmailAndPassword(payload.email, payload.password)
      .then((userCredentials) => {
        userCredentials.user.updateProfile({
          displayName: payload.displayName
        })
        // Tie UID from AUTH to Collection ""registered" 
        return db.collection('registered').doc(userCredentials.user.uid).set({
          myReg: payload.displayName
        })
        })
    }),

    //Log in the user
    logInUser: firestoreAction((context, payload) => {
      auth.signInWithEmailAndPassword(payload.email, payload.password)
    }),

    //Delete the user or remove account self service
    deleteUser: firestoreAction((context, payload) => {
      auth.remove(payload.email, payload.password)
    }),
    addUser: ({commit}, user) => {
      commit('ADD_USER', {user})
    }
  },
})