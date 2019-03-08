<template>
  <div class="main-wrapper">
    <v-container grid-list-xl>
      <v-layout justify-center class="mt-1">
        <v-card class="input-card-wrapper mt-5">
          <v-card class="input-card white">
            <v-flex xs12 class="input-flex align-center">
              <input type="text" class="input-search font-weight-bold input_gray--text" name="name" id="name" placeholder="Player name" v-model="playerName">
              <v-combobox
                v-model="resultsYear"
                :items="['2019', '2018', '2017', '2016', '2015']"
                label="Select year"
                class="input-search font-weight-bold"
                chips
                solo>
                <template v-slot:selection="data">
                  <v-chip
                    :selected="data.selected"
                    close>
                    <strong>{{ data.item }}</strong>
                  </v-chip>
                </template>
              </v-combobox>
            </v-flex>
            <v-flex xs12 class="input-flex align-center">
              <v-combobox
                v-model="pokerRoom"
                :items="['Pokerstars']"
                label="Poker room"
                class="input-search font-weight-bold"
                chips
                solo>
                <template v-slot:selection="data">
                  <v-chip
                    :selected="data.selected"
                    close>
                    <strong>{{ data.item }}</strong>
                  </v-chip>
                </template>
              </v-combobox>
              <v-combobox
                v-model="tournamentType"
                :items="['ALL', 'SCHEDULED', 'MTT', 'SNG', 'STT', 'HEADS-UP']"
                label="Tournament type"
                class="input-search font-weight-bold"
                chips
                solo>
                <template v-slot:selection="data">
                  <v-chip
                    :selected="data.selected"
                    close>
                    <strong>{{ data.item }}</strong>
                  </v-chip>
                </template>
              </v-combobox>
            </v-flex>
          </v-card>
          <v-btn @click="searchPlayer" class="search-btn pink white--text subheading">Search</v-btn>
        </v-card>
      </v-layout>
      <v-layout class="mt-2">
        <v-flex xs12 class="content-wrapper">
          <v-card class="mt-2 m-b-3">
            <v-flex xs10 offset-xs1>
              <v-card-text class="font-weight-medium">Player Name <span class="blue--text ml-1">{{ playerName }}</span></v-card-text>
            </v-flex>
          </v-card>
          <v-card class="m-b-3">
            <v-flex xs10 offset-xs1>
              <v-card-text class="font-weight-medium">Selected tournament <span class="blue--text ml-1">TCOOP-21: $27</span></v-card-text>
            </v-flex>
          </v-card>
          <v-card class="m-b-3">
            <v-flex xs10 offset-xs1>
              <v-card-text class="font-weight-medium">Tournament name....</v-card-text>
            </v-flex>
          </v-card>
          <v-card class="mb-3">
            <v-flex xs10 offset-xs1>
              <v-card-text class="font-weight-medium">AVG profit...</v-card-text>
              <v-card-text class="font-weight-medium">$10000</v-card-text>
            </v-flex>
          </v-card>
        </v-flex>
      </v-layout>
    </v-container>
  </div>
</template>

<script>
import firebase from 'firebase'

export default {
  name: 'MainDesk',
  data () {
    return {
      playerName: '',
      resultsYear: '',
      pokerRoom: '',
      tournamentType: ''
    }
  },
  created () {
    console.log(firebase.auth().currentUser.uid)
  },
  methods: {
    searchPlayer () {
      console.log({ playerName: this.playerName, resultsYear: this.resultsYear, pokerRoom: this.pokerRoom, tournamentType: this.tournamentType })
    }
  }
}
</script>

<style>
.m-b-3 {
  margin-bottom: 38px;
}

.main-wrapper .container {
  flex-direction: column;
}

.input-card-wrapper {
  position: relative;
  max-width: 648px;
  width: 100%;
  height: 217px;
  display: flex;
  align-items: center;
  justify-content: center;
  flex-direction: column;
  box-shadow: none;
}
  .input-card-wrapper::before {
    content: '';
    position: absolute;
    top: 0;
    right: 0;
    bottom: 0;
    left: 0;
    background-color: #edf1f3;
    filter: blur(30px);
  }

.input-card {
  max-width: 560px;
  width: 100%;
  min-height: 184px !important;
  display: flex;
  flex-direction: row;
  justify-content: space-around;
  border-radius: 10px !important;
  box-shadow: none;
}
  .input-flex {
    display: flex;
    flex-direction: column;
    justify-content: space-around;
    margin: 15px 0;
  }

#name {
  border: 1px solid #e0e0e0;
}
.input-search {
  width: 221px;
  max-height: 48px;
  height: 100%;
  text-align: center;
  font-size: 18px;
  outline: none;
}
.search-btn {
  width: 108px;
  height: 40px;
  transform: translateY(-25px);
  box-shadow: 0px 4px 4px rgba(0, 0, 0, .25);
  border-radius: 50px;
}

.input-search::placeholder {
  color: #bdbdbd !important;
}

/* Inside Dropdown box <v-combobox> updates */
.input-search:active,
.input-search:focus,
.v-select--is-menu-active .v-input__slot {
  border-left-width: 2px !important;
  border-left-color: #56CCF2 !important;
}
.v-input__control {
  max-height: 48px !important;
}
.v-input__slot {
  border: 1px solid #e0e0e0 !important;
  box-shadow: none !important;
}
.v-chip {
  border-radius: 0;
  background-color: transparent !important;
}
.v-chip__close {
  display: none;
}
.v-chip__content > strong {
  font-weight: bold !important;
  font-size: 18px !important;
  color: #828282;
}
.v-list .v-list__tile .v-list__tile__title {
  color: #828282;
  font-weight: bold;
}

/* Content layout */
.content-wrapper {
  position: relative;
  padding: 25px;
}
  .content-wrapper::before {
    content: '';
    position: absolute;
    top: 0;
    right: 0;
    bottom: 0;
    left: 0;
    background-color: #edf1f3;
    filter: blur(30px);
  }

.content-wrapper > .v-card {
  border-radius: 10px;
  border: 1px solid #EDF1F3;
  box-shadow: none;
  padding: 0;
}

  div.mt-2 .v-card.v-sheet.theme--light > div,
  .content-wrapper > .v-card .v-card__text {
    padding-left: 0;
    padding-right: 0;
  }
  .content-wrapper > .v-card .v-card__text {
    padding: 0;
  }

</style>
