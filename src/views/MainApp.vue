<template>
  <div class="main-app h-100" v-resize="checkIfMobile">
    <div v-if="windowMobile" class="h-100">
      <navigation-mob-comp></navigation-mob-comp>
      <main-mob-comp :playerData="playerData" @req_data="configAndPushPlayer"></main-mob-comp>
    </div>
    <div v-else>
      <navigation-desk-comp></navigation-desk-comp>
      <main-desk-comp :playerData="playerData" @req_data="configAndPushPlayer"></main-desk-comp>
    </div>
  </div>
</template>

<script>
import firebase from 'firebase'
import dataDummy from '../../dataDummy.json'
const NavigationMob = () => import(/* webpackChunkName: "navigation-mob-component" */ '@/components/NavigationMob.vue')
const NavigationDesk = () => import(/* webpackChunkName: "navigation-desk-component" */ '@/components/NavigationDesk.vue')
const MainDesk = () => import(/* webpackChunkName: "main-desk-component" */ '@/components/MainDesk.vue')
const MainMob = () => import(/* webpackChunkName: "main-mob-component" */ '@/components/MainMob.vue')

export default {
  name: 'mainApp',
  components: {
    'navigation-mob-comp': NavigationMob,
    'navigation-desk-comp': NavigationDesk,
    'main-desk-comp': MainDesk,
    'main-mob-comp': MainMob
  },
  data () {
    return {
      windowMobile: null,
      playerData: [{ selectedTournament: '' }]
    }
  },
  created () {
    console.log(firebase.auth().currentUser.uid)
    this.configurePlayerData()
  },
  mounted () {
    this.checkIfMobile()
  },
  methods: {
    checkIfMobile () {
      this.windowMobile = (document.documentElement.clientWidth < 850)
    },
    modifyTournamentType (player) {
      if (player.tournamentType === 'ALL') {
        return 'any'
      } else if (player.tournamentType === 'HEADS-UP') {
        return 'hup'
      } else {
        return player.tournamentType.toLowerCase()
      }
    },
    configAndPushPlayer (player) {
      const modifiedPlayer = {
        playerName: player.playerName.toLowerCase(),
        resultsYear: player.resultsYear,
        pokerRoom: player.pokerRoom.toLowerCase(),
        tournamentType: this.modifyTournamentType(player)
      }
      console.log(modifiedPlayer)
    },
    checkIfContainsData () {
      return (this.playerData !== null && this.playerData.some(item => typeof item === 'object'))
    },
    configurePlayerData () {
      if (this.checkIfContainsData()) {
        this.playerData = [{ selectedTournament: 'All' }, ...dataDummy]
      }
    }
  },
  beforeDestroy () {
    window.removeEventListener('resize', this.checkIfMobile)
  }
}
</script>
