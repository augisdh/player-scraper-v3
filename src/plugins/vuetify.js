import Vue from 'vue'
import Vuetify from 'vuetify/lib'
import 'vuetify/src/stylus/app.styl'

Vue.use(Vuetify, {
  iconfont: 'md',
  theme: {
    blue: '#2786F5',
    light_blue: '#56CCF2',
    pink: '#F64B85',
    light_gray: '#BDBDBD',
    lighter_gray: '#E0E0E0',
    active_gray: '#f2f2f2',
    input_gray: '#828282',
    black_3: '#333',
    active_black: '#555',
    disactive: '#000',
    blur: '#EDF1F3',
    table_black: '#4F4F4F'
  },
  breakpoint: {
    thresholds: {
      sm: 850
    }
  }
})
