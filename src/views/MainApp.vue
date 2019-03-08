<template>
  <div class="main-app" v-resize="checkIfMobile">
    <navigation-mob-comp v-if="windowMobile"></navigation-mob-comp>
    <navigation-desk-comp v-else></navigation-desk-comp>
    <main-desk-comp></main-desk-comp>
  </div>
</template>

<script>
const NavigationMob = () => import(/* webpackChunkName: "navigation-mob-component" */ '@/components/NavigationMob.vue')
const NavigationDesk = () => import(/* webpackChunkName: "navigation-desk-component" */ '@/components/NavigationDesk.vue')
const MainDesk = () => import(/* webpackChunkName: "main-desk-component" */ '@/components/MainDesk.vue')

export default {
  name: 'mainApp',
  components: {
    'navigation-mob-comp': NavigationMob,
    'navigation-desk-comp': NavigationDesk,
    'main-desk-comp': MainDesk
  },
  data () {
    return {
      windowMobile: null
    }
  },
  mounted () {
    this.checkIfMobile()
  },
  methods: {
    checkIfMobile () {
      this.windowMobile = (document.documentElement.clientWidth < 850)
    }
  },
  beforeDestroy () {
    window.removeEventListener('resize', this.checkIfMobile)
  }
}
</script>
