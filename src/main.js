import Vue from 'vue'
import App from './App.vue'
import router from './router'
import store from './store'
import Vuelidate from 'vuelidate'
import VueChatScroll from 'vue-chat-scroll'

Vue.use(VueChatScroll)
Vue.use(Vuelidate)


new Vue({
  router,
  store,
  render: h => h(App)
}).$mount('#app')
