<template>
  <div class="toolbar-wrapper">
    <v-toolbar
      color="white"
      fixed
      clipped-right
      flat
      app>
      <v-spacer></v-spacer>
      <v-toolbar-side-icon class="black_3--text" @click.stop="drawer = !drawer"></v-toolbar-side-icon>
    </v-toolbar>
    <v-navigation-drawer
      fixed
      clipped
      right
      :width="214"
      v-model="drawer">
      <v-list>
        <v-list-tile>
          <v-list-tile-content>
            <v-list-tile-title class="input_gray--text font-weight-light">Name</v-list-tile-title>
          </v-list-tile-content>
          <v-list-tile-action>
            <v-btn
              icon
              class="black_3--text"
              @click.stop="drawer = !drawer">
              <v-icon>chevron_right</v-icon>
            </v-btn>
          </v-list-tile-action>
        </v-list-tile>
        <v-list>
          <v-divider light></v-divider>
        </v-list>
        <v-list-tile
          to="/app"
          class="disactive_black--text font-weight-medium"
          active-class="active_black--text">
          <v-list-tile-content>
            <v-list-tile-title>HOME</v-list-tile-title>
          </v-list-tile-content>
        </v-list-tile>
        <v-list-tile
          to="/about"
          class="disactive_black--text font-weight-medium"
          active-class="active_black--text">
          <v-list-tile-content>
            <v-list-tile-title>ABOUT</v-list-tile-title>
          </v-list-tile-content>
        </v-list-tile>
      </v-list>
      <v-list>
        <v-list-tile
          to="/"
          class="disactive_black--text font-weight-light"
          active-class="active_black--text">
          <v-list-tile-content>
            <v-list-tile-title @click="singOut">SIGN OUT</v-list-tile-title>
          </v-list-tile-content>
        </v-list-tile>
        <v-divider light></v-divider>
        <v-list-tile>
          <v-list-tile-content>
            <v-list-tile-title class="title black_3--text font-weight-bold">
              PLAYER
              <span class="font-weight-light">SCRAPER</span>
            </v-list-tile-title>
          </v-list-tile-content>
        </v-list-tile>
      </v-list>
    </v-navigation-drawer>
  </div>
</template>

<script>
import firebase from 'firebase/app'
import 'firebase/auth'

export default {
  name: 'NavigationMob',
  data () {
    return {
      drawer: false
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

<style scoped>
.v-navigation-drawer {
  display: flex;
  flex-direction: column;
  justify-content: space-between;
}
</style>
