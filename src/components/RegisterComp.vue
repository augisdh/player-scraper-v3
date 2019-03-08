<template>
  <v-flex>
    <v-form class="align-center">
      <div class="input-card align-start">
        <label class="light_gray--text font-weight-bold" for="email-register">Email Address</label>
        <input class="input_gray--text white" type="email" placeholder="Email" name="email-register" id="email-register" v-model="email">
      </div>
      <div class="input-card align-start">
        <label class="light_gray--text font-weight-bold" for="password-register">Password</label>
        <input class="input_gray--text white" type="password" placeholder="Password" name="password-register" id="password-register" v-model="password">
      </div>
      <div class="input-card align-start">
        <label class="light_gray--text font-weight-bold" for="repeat-password-register">Repeat Password</label>
        <input class="input_gray--text white" type="password" placeholder="Password" name="repeat-password-register" id="repeat-password-register" v-model="repeatedPassword">
      </div>
      <v-btn @click="appCreateAcc" class="submit-btn pink white--text text-none">Register</v-btn>
    </v-form>
    <v-flex class="create-acc-card">
      <h4>I have an account!</h4>
      <router-link to="/login" class="sign-up-btn pink--text font-weight-bold ml-1">Log in</router-link>
    </v-flex>
  </v-flex>
</template>

<script>
import firebase from 'firebase/app'
import 'firebase/auth'

export default {
  name: 'RegisterComp',
  data () {
    return {
      email: '',
      password: '',
      repeatedPassword: ''
    }
  },
  methods: {
    appCreateAcc () {
      if (this.password === this.repeatedPassword) {
        firebase.auth().createUserWithEmailAndPassword(this.email, this.password)
          .then(() => {
            this.$router.replace('/login')
          }).catch((err) => {
            alert(`Oops. ${err.message}`)
          })
      } else {
        alert(`Passwords don't match`)
      }
    }
  }
}
</script>
