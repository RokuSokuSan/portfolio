<template>
  <div class="chat container">
      <div class="center">
          <router-link to="/" class="btn green">Return to home</router-link>
      </div><br>
      <div class="card">
          <div class="card-content">
              <ul class="messages" v-chat-scroll>
                <li class="chat-message" v-for="message in messages" :key="message.id">
                    <div class="right-bubble" v-if="message.name === name">
                        <span class="green-text">{{ message.name }}</span>
                        <span class="grey-text text-darken-3">{{ message.content }}&nbsp;</span>
                        <span class="grey-text time">{{ message.timestamp | moment }}</span>
                    </div>
                    <div class="left-bubble right-align" v-if="message.name !== name">
                        <span class="green-text">{{ message.name }}&nbsp;</span>
                        <span class="grey-text text-darken-3">{{ message.content }}</span>
                        <span class="grey-text time">{{ message.timestamp | moment }}</span>
                    </div>
                </li>
              </ul>
          </div>
          <div class="card-content">
              <form @submit.prevent="addMessage">
                  <label>New Message from {{ name }} (enter to add):</label>
                  <input v-model="newMessage">
                  <p v-if="feedback">{{ feedback }}</p>
                  <button class="bnt green"></button>
              </form>
          </div>
      </div>
  </div>
</template>

<script>
export default {

}
</script>

<style>

</style>