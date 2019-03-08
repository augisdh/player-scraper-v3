<template>
  <div class="toolbar-wrapper">
    <v-toolbar
      color="blue"
      fixed
      flat
      app>
      <div class="toolbar-wrap justify-center">
        <v-container grid-list-xl class="toolbar-wrap justify-space-between">
          <v-flex xs10 offset-xs1 class="flex-toolbar">
            <v-toolbar-title class="white--text font-weight-bold subheading">
              PLAYER
              <span class="font-weight-light">SCRAPER</span>
            </v-toolbar-title>
            <v-spacer></v-spacer>
            <v-toolbar-items>
              <v-btn
                flat
                to="/app"
                class="lighter_gray--text font-weight-bold text-size-14"
                active-class="active_gray--text">
                Home
              </v-btn>
              <v-btn
                flat
                to="/about"
                class="lighter_gray--text white--text font-weight-bold text-size-14"
                active-class="active_gray--text">
                About
              </v-btn>
              <v-btn
                flat
                @click="singOut"
                class="lighter_gray--text text-underline white--text font-weight-bold text-size-14"
                active-class="active_gray--text">
                Sign out
              </v-btn>
            </v-toolbar-items>
          </v-flex>
        </v-container>
      </div>
    </v-toolbar>
  </div>
</template>

<script>
import firebase from 'firebase'

export default {
  name: 'NavigationDesk',
  data () {
    return {
      //
    }
  },
  methods: {
    singOut () {
      firebase.auth().signOut()
        .then(() => {
          this.$router.replace('/login')
        }).catch((err) => {
          alert(`Oops. ${err}`)
          console.log(`Oops. ${err}`)
        })
    }
  }
}
</script>

<style>
.toolbar-wrap .container {
  display: flex;
  align-self: center;
  padding: 16px;
}

.toolbar-wrap {
  width: 100%;
  display: flex;
}

.flex-toolbar {
  display: flex;
  flex-direction: row;
}

.v-btn--active:before,
.v-btn:hover:before,
.v-btn:focus:before {
  background-color: transparent !important;
}

</style>
