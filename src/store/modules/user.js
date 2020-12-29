
//Utelises firebase.js where the connection is made
import { db } from '../../../firebase' 
import { vuexfireMutations, firestoreAction } from 'vuexfire'


export default {
    state: {
        users: []
    },
    getters:{
        users: state => state.users
    },
    mutations: {
        ...vuexfireMutations,
    },
    actions: {
      //bindUser: This action is to get data from firestore so we can display it in our view.
        bindUser: firestoreAction(({ bindFirestoreRef }) => {
          return bindFirestoreRef('users', db.collection('users'))
        }),
        //createUser: This action creates a new entry for a new user in firebase.
        //It is called from Register.vue
        createUser: firestoreAction( (payload) => {
          return db.collection('users').add(payload)
          .then(cred => {
            const rForm = document.querySelector('#regForm')
            regForm.reset()
          })
        }),
        // LOGIN: firestoreAction(({ context, payload }) => {
        //   return new Promise({resolve, reject} => {
            
        //   })
        // }), 
      },
}