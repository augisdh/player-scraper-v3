<template>
  <div class="main-wrapper">
    <v-container grid-list-xl>
      <v-layout justify-center>
        <div class="input-card-wrapper">
          <v-card class="input-card white">
            <v-flex xs12 class="input-flex align-center">
              <input
                type="text"
                class="input-search font-weight-bold input_gray--text"
                name="name"
                id="name"
                placeholder="Player name"
                v-model="playerObj.playerName">
              <v-combobox
                v-model="playerObj.resultsYear"
                :items="['2019', '2018', '2017', '2016', '2015']"
                placeholder="Select year"
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
                v-model="playerObj.pokerRoom"
                :items="['Pokerstars']"
                placeholder="Poker room"
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
                v-model="playerObj.tournamentType"
                :items="['ALL', 'SCHEDULED', 'MTT', 'SNG', 'STT', 'HEADS-UP']"
                placeholder="Tournament type"
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
            <v-flex v-show="selectedTournament !== ''" xs12 class="input-flex align-center">
              <v-combobox
                v-model="selectedTournament"
                :items="[]"
                placeholder="Select tournament"
                class="input-search font-weight-bold"
                chips
                :maxlength="10"
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
          <v-btn @click="sendSearchPlayerToMain" class="search-btn pink white--text subheading">Search</v-btn>
        </div>
      </v-layout>
      <v-layout v-show="selectedTournament !== ''">
        <v-flex xs12 class="content-wrapper-desk">
          <v-card class="m-b-3">
            <v-flex xs10 offset-xs1>
              <v-card-text class="table_black--text font-weight-medium">Player Name <span class="blue--text ml-1">player name</span></v-card-text>
            </v-flex>
          </v-card>
          <v-card class="m-b-3">
            <v-flex xs10 offset-xs1>
              <v-card-text class="table_black--text font-weight-medium">Selected tournament <span class="blue--text ml-1">{{ selectedTournament }}</span></v-card-text>
            </v-flex>
          </v-card>
          <v-card class="m-b-3">
            <v-flex xs10 offset-xs1>
              <table class="player-table">
                <thead>
                  <tr>
                    <th class="table_black--text font-weight-medium text-xs-left">Games played</th>
                    <th class="table_black--text font-weight-medium text-xs-center">Buy-in</th>
                    <th class="table_black--text font-weight-medium text-xs-right">Total profit</th>
                  </tr>
                </thead>
                <tbody>
                  <tr>
                    <td class="input_gray--text font-weight-medium text-xs-left">12313</td>
                    <td class="input_gray--text font-weight-medium text-xs-center">545</td>
                    <td class="input_gray--text font-weight-medium text-xs-right">555</td>
                  </tr>
                </tbody>
              </table>
            </v-flex>
          </v-card>
          <v-card>
            <v-flex xs10 offset-xs1>
              <table class="player-table">
                <thead>
                  <tr>
                    <th class="table_black--text font-weight-medium text-xs-left">Avg profit</th>
                    <th class="table_black--text font-weight-medium text-xs-center">Avg ROI %</th>
                    <th class="table_black--text font-weight-medium text-xs-right">ITM %</th>
                  </tr>
                </thead>
                <tbody>
                  <tr>
                    <td class="font-weight-medium text-xs-left">2244</td>
                    <td class="font-weight-medium text-xs-center">12</td>
                    <td class="font-weight-medium text-xs-right">37</td>
                  </tr>
                </tbody>
              </table>
            </v-flex>
          </v-card>
        </v-flex>
      </v-layout>
    </v-container>
  </div>
</template>

<script>

export default {
  name: 'MainDesk',
  props: {
    playerData: {
      type: Array
    }
  },
  data () {
    return {
      playerObj: {
        playerName: '',
        resultsYear: '',
        pokerRoom: 'Pokerstars',
        tournamentType: ''
      },
      selectedTournament: this.playerData[0].selectedTournament
    }
  },
  methods: {
    sendSearchPlayerToMain () {
      (this.checkSearchPlayerInputs()) ? this.$emit('req_data', this.playerObj) : alert('Player name field must be filled out!')
    },
    checkSearchPlayerInputs () {
      if (this.playerObj.playerName === '') {
        return false
      } else {
        if (this.playerObj.resultsYear === '') {
          this.playerObj.resultsYear = '2019'
        }

        if (this.playerObj.tournamentType === '') {
          this.playerObj.tournamentType = 'ALL'
        }
        return true
      }
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
  padding: 17px 44px 0 44px;
  margin-top: 31px;
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
    bottom: 35px;
    left: 0;
    background-color: #edf1f3;
    filter: blur(30px);
  }

.input-card-wrapper .input-card {
  display: flex;
  flex-direction: row;
  border-radius: 10px !important;
  box-shadow: none;
}
  .input-card-wrapper .input-flex {
    display: flex;
    flex-direction: column;
    justify-content: space-between;
    height: 117px;
    padding: 0 !important;
    margin: 31px 27px 36px 27px !important;
  }

#name {
  border: 1px solid #e0e0e0;
  padding-left: 12px;
}
.input-card-wrapper .input-search {
  flex: none;
  max-width: 221px;
  width: 100%;
  height: 48px !important;
  height: 100%;
  text-align: left;
  font-size: 18px;
  outline: none;
}
.input-card-wrapper .search-btn {
  width: 108px;
  height: 40px;
  transform: translateY(-25px);
  box-shadow: 0px 4px 4px rgba(0, 0, 0, .25);
  border-radius: 50px;
}

.input-card-wrapper .input-search::placeholder,
.v-input__slot .v-select__selections > input::placeholder {
  color: #bdbdbd;
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
  max-width: 142px;
  width: 100%;
  overflow: hidden;
  text-overflow: ellipsis;
}
.v-list .v-list__tile .v-list__tile__title {
  color: #828282;
  font-weight: bold;
}

/* Content layout */
.content-wrapper-desk {
  position: relative;
  padding: 22px 15px 28px 15px !important;
}
  .content-wrapper-desk::before {
    content: '';
    position: absolute;
    top: 0;
    right: 0;
    bottom: 0;
    left: 0;
    background-color: #edf1f3;
    filter: blur(30px);
  }

.content-wrapper-desk > .v-card {
  border-radius: 10px;
  border: 1px solid #EDF1F3;
  box-shadow: none;
  padding: 0;
}

  div.mt-2 .v-card.v-sheet.theme--light > div,
  .content-wrapper-desk > .v-card .v-card__text {
    padding-left: 0;
    padding-right: 0;
  }
  .content-wrapper-desk > .v-card .v-card__text {
    padding: 0;
  }

.player-table {
  width: 100%;
}
tbody:before {
    content: '';
    top: 0;
    right: 0;
    bottom: 0;
    left: 0;
    height: 21px;
    display: block;
}
.player-table th,
.player-table td {
  width: 25%;
  text-align: left;
}
</style>
