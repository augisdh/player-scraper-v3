<template>
  <v-flex>
    <v-form class="align-center">
      <div class="input-card align-start">
        <label class="light_gray--text font-weight-bold" for="email">Email Address</label>
        <input class="input_gray--text white" type="email" placeholder="Email" name="email" id="email" v-model="email">
      </div>
      <div class="input-card align-start">
        <label class="light_gray--text font-weight-bold" for="password">Password</label>
        <input class="input_gray--text white" type="password" placeholder="Password" name="password" id="password" v-model="password">
      </div>
      <v-btn @click="appAuthLogin" class="submit-btn pink white--text text-none">Submit</v-btn>
    </v-form>
    <v-flex class="google-login-card">
      <v-btn
        @click="googleAuthLogin"
        class="google-btn white black--text text-none">
        Login with
        <span class="pink--text ml-1">Google+</span>
      </v-btn>
    </v-flex>
    <v-flex class="create-acc-card">
      <h4>Dont have an account?</h4>
      <router-link to="/register" class="sign-up-btn pink--text font-weight-bold ml-1">Sign up</router-link>
    </v-flex>
  </v-flex>
</template>

<script>
import firebase from 'firebase/app'
import 'firebase/auth'

export default {
  name: 'LoginComp',
  data () {
    return {
      email: '',
      password: ''
    }
  },
  methods: {
    googleAuthLogin () {
      const provider = new firebase.auth.GoogleAuthProvider()
      firebase.auth().signInWithPopup(provider)
        .then((result) => {
          this.$router.replace('app')
        }).catch((err) => {
          alert(`Oops. ${err.message}`)
        })
    },
    appAuthLogin () {
      firebase.auth().signInWithEmailAndPassword(this.email, this.password)
        .then((user) => {
          this.$router.replace('app')
        }).catch((err) => {
          alert(`Oops. ${err.message}`)
        })
    }
  }
}
</script>
