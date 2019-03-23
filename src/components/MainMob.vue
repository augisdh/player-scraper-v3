<template>
  <div class="main-wrapper h-100 pa-0">
    <v-container grid-list-xl class="h-100 pt-0">
      <!-- Search player layout -->
      <v-layout v-show="searchView === true" column justify-center align-content-space-between class="h-100 search-layout">
        <v-flex>
          <v-card-title class="pa-0">
            <p class="text-xs-center ma-0 w-100 black_3--text font-weight-bold subheading">Enter info below to search</p>
          </v-card-title>
          <v-text-field
            v-model="playerObj.playerName"
            class="mt-4 mb-5"
            label="Player name"></v-text-field>
          <v-text-field
            v-model="playerObj.pokerRoom"
            :data-view="'room'"
            @click="getSelectLayout"
            class="mb-5"
            readonly
            label="Select poker room"></v-text-field>
          <v-text-field
            v-model="playerObj.resultsYear"
            :data-view="'year'"
            @click="getSelectLayout"
            class="mb-5"
            readonly
            label="Select year"></v-text-field>
          <v-text-field
            v-model="playerObj.tournamentType"
            :data-view="'type'"
            @click="getSelectLayout"
            class="mb-5"
            readonly
            label="Tournament type"></v-text-field>
        </v-flex>
        <div>
          <v-btn v-show="selectedTournament !== ''" @click.stop="searchView = false" class="search-btn w-100 blue white--text subheading">Exit search</v-btn>
          <v-btn @click="searchView = false" class="search-btn w-100 pink white--text subheading">Search</v-btn>
        </div>
        <v-dialog
          v-model="dialogSelected"
          fullscreen
          hide-overlay
          transition="dialog-bottom-transition"
          scrollable>
          <v-card tile>
            <v-toolbar
              color="white">
              <v-icon @click.stop="dialogSelected = false" class="black_3--text">close</v-icon>
              <v-toolbar-title class="w-100 text-xs-center ma-0 text-capitalize">{{ typeDialog }}</v-toolbar-title>
            </v-toolbar>
            <v-card-text class="px-0">
              <v-list class="select-list">
                <v-list-tile v-for="element in dialogData[`${typeDialog}`]" :key="element">
                  <v-list-tile-content>
                    <v-btn flat class="ma-0 px-3 w-100"  @click="setVModel(element)">
                      <p class="ma-0 w-100 text-xs-left black_3--text font-weight-medium subheading t-overflow">{{ element }}</p>
                    </v-btn>
                  </v-list-tile-content>
                </v-list-tile>
              </v-list>
            </v-card-text>
          </v-card>
        </v-dialog>
      </v-layout>
      <!-- Results content layout -->
      <v-layout v-show="selectedTournament !== '' && searchView !== true" xs12 column class="content-wrapper-mob">
        <v-flex xs12>
          <v-card flat>
            <v-card-text class="table_black--text font-weight-medium pa-0">Player name</v-card-text>
            <v-card-text @click="searchView = true" class="c-pointer blue--text font-weight-bold pa-0">player name</v-card-text>
          </v-card>
        </v-flex>
        <v-flex xs12>
          <v-card flat>
            <v-card-text class="table_black--text font-weight-medium pa-0">Selected tournament</v-card-text>
            <v-card-text
              class="c-pointer blue--text font-weight-bold pa-0"
              :data-view="'tournaments'"
              @click="getSelectLayout">
              All
            </v-card-text>
          </v-card>
        </v-flex>
        <v-flex xs12>
          <v-tabs
            v-model="activeTab"
            grow>
            <div class="slider-bg"></div>
            <v-tabs-slider color="pink index-1"></v-tabs-slider>
            <v-tab
              v-for="tab in tabList"
              :key="tab"
              class="tab-size table_black--text font-weight-bold text-none">
              {{ tab }}
            </v-tab>
          </v-tabs>
          <v-tabs-items v-model="activeTab" class="mt-4">
            <v-tab-item
              :value="0">
              <v-flex class="tab-content-flex">
                <v-card flat>
                  <v-card-text class="table_black--text font-weight-medium pt-4 pb-4">
                    Games played
                    <span class="input_gray--text font-weight-medium">12313</span>
                  </v-card-text>
                  <v-card-text class="table_black--text font-weight-medium pt-0 pb-4">
                    Buy-in
                    <span class="input_gray--text font-weight-medium">545</span>
                  </v-card-text>
                  <v-card-text class="table_black--text font-weight-medium pt-0 pb-4">
                    Total profit
                    <span class="font-weight-medium">555</span>
                  </v-card-text>
                </v-card>
                <v-card flat class="mt-4">
                  <v-card-text class="table_black--text font-weight-medium pt-4 pb-4">
                    Avg profit
                    <span class="font-weight-medium">2244</span>
                  </v-card-text>
                  <v-card-text class="table_black--text font-weight-medium pt-0 pb-4">
                    Avg ROI %
                    <span class="font-weight-medium">12</span>
                  </v-card-text>
                  <v-card-text class="table_black--text font-weight-medium pt-0 pb-4">
                    ITM %
                    <span class="font-weight-medium">37</span>
                  </v-card-text>
                </v-card>
              </v-flex>
            </v-tab-item>
            <v-tab-item
              :value="1">
              <v-card>
                <v-card-text>Win/loose chart: something new</v-card-text>
              </v-card>
            </v-tab-item>
            <v-tab-item
              :value="2">
              <v-flex class="tab-content-flex">
                <v-expansion-panel>
                  <v-expansion-panel-content
                    v-for="(item,i) in 10"
                    :key="i">
                    <template v-slot:header>
                      <div class="tab-flex input_gray--text">
                        <span class="pr-3">2019/03/23</span>
                        <span>1.00$ NL Hold’em [180 players]</span>
                      </div>
                    </template>
                    <v-card class="drop-card">
                      <v-card-text class="flex-d justify-space-between py-2 white table_black--text font-weight-medium">Buy-in<span class="input_gray--text">15</span></v-card-text>
                      <v-card-text class="flex-d justify-space-between py-2 white table_black--text font-weight-medium">Position<span class="input_gray--text text-xs-right">1</span></v-card-text>
                      <v-card-text class="flex-d justify-space-between py-2 white table_black--text font-weight-medium">Prize<span class="input_gray--text text-xs-right">155000</span></v-card-text>
                    </v-card>
                  </v-expansion-panel-content>
                </v-expansion-panel>
              </v-flex>
            </v-tab-item>
          </v-tabs-items>
        </v-flex>
      </v-layout>
    </v-container>
  </div>
</template>

<script>
export default {
  name: 'MainMob',
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
      dialogSelected: false,
      typeDialog: '',
      dialogData: {
        room: ['Pokerstars'],
        year: ['2019', '2018', '2017', '2016', '2015'],
        type: ['ALL', 'SCHEDULED', 'MTT', 'SNG', 'STT', 'HEADS-UP'],
        tournaments: ['1.00$ NL Hold`em [180 players]', '1.00$ NL Hold`em Something else ok ok understood [180 players]']
      },
      searchView: false,
      activeTab: null,
      tabList: ['Total', 'Win/loose chart', 'Last 10 tournaments'],
      selectedTournament: this.playerData[0].selectedTournament
    }
  },
  mounted () {
    this.searchView = this.updateSearchView
  },
  computed: {
    updateSearchView: function () {
      return (this.selectedTournament === '')
    }
  },
  methods: {
    sendSearchPlayerToMain () {
      (this.checkSearchPlayerInputs()) ? this.$emit('req_data', this.playerObj) : alert('Player name field must be filled out!')
    },
    getSelectLayout (event) {
      this.dialogSelected = !this.dialogSelected
      this.typeDialog = event.target.dataset.view
    },
    setVModel (value) {
      this.dialogSelected = !this.dialogSelected
      if (this.typeDialog === 'room') {
        this.playerObj.pokerRoom = value
      } else if (this.typeDialog === 'year') {
        this.playerObj.resultsYear = value
      } else if (this.typeDialog === 'type') {
        this.playerObj.tournamentType = value
      }
    }
  }
}
</script>

<style>
.w-100 {
  width: 100%
}
.content-wrapper-mob .slider-bg {
  position: absolute;
  right: 0;
  left: 0;
  bottom: 0;
  margin: 0;
  height: 2px;
  background-color: #F2F2F2;
  z-index: 0;
}
.content-wrapper-mob .v-tabs__slider-wrapper {
  z-index: 1;
}

.v-window-item {
  position: relative;
}
  .v-window-item::before {
    content: '';
    position: absolute;
    top: 0;
    right: 0;
    bottom: 0;
    left: 0;
    background-color: #edf1f3;
    filter: blur(30px);
  }

.tab-content-flex {
  padding: 11px 5px 15px 5px !important;
}
  .tab-content-flex > .v-card {
    border-radius: 10px;
    border: 1px solid #EDF1F3;
    box-shadow: none;
  }
  .drop-card {
    border-bottom-left-radius: 10px !important;
    border-bottom-right-radius: 10px !important;
  }
    .tab-content-flex > .v-card > .v-card__text {
      display: flex;
      flex-direction: row;
      justify-content: space-between;
      flex-wrap: wrap;
    }

.tab-content-flex > ul {
  box-shadow: none;
  border: none;
}
  .tab-content-flex > ul > li {
    border-radius: 10px !important;
    border: 1px solid #EDF1F3 !important;
    margin-bottom: 15px;
    box-shadow: none;
    z-index: 1;
  }
    .tab-content-flex > ul > li .v-expansion-panel__header {
      padding: 6px 15px;
      min-height: 30px;
    }
    .tab-flex {
      display: flex;
      flex-direction: row;
      justify-content: space-between;
    }

.search-layout {
  margin: auto !important;
}
  .search-layout .v-input__slot {
    border: none !important;
  }
  .search-layout .search-btn {
    border-radius: 50px;
  }
  .theme--light.v-text-field > .v-input__control > .v-input__slot:before {
    bottom: 0;
  }
.select-list .v-list__tile {
  padding: 0;
}

@media (max-width: 400px) {
  .tab-size {
    font-size: 12px;
  }
}
</style>
