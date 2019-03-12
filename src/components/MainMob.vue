<template>
  <div class="main-wrapper pa-0">
    <v-container grid-list-xl class="pt-0">
      <v-layout xs12 column class="content-wrapper-mob">
        <v-flex xs12>
          <v-card flat>
            <v-card-text class="table_black--text font-weight-medium pa-0">Player name</v-card-text>
            <v-card-text class="blue--text font-weight-bold pa-0">player name</v-card-text>
          </v-card>
        </v-flex>
        <v-flex xs12>
          <v-card flat>
            <v-card-text class="table_black--text font-weight-medium pa-0">Selected tournament</v-card-text>
            <v-card-text class="blue--text font-weight-bold pa-0">All</v-card-text>
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
                      <div class="tab-size">Item</div>
                    </template>
                    <v-card>
                      <v-card-text class="grey lighten-3">something</v-card-text>
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
  data () {
    return {
      activeTab: null,
      tabList: ['Total', 'Win/loose chart', 'Last 10 tournaments']
    }
  }
}
</script>

<style>
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

@media (max-width: 400px) {
  .tab-size {
    font-size: 12px;
  }
}
</style>
