<template>
  <div class="about" v-resize="checkIfMobile">
    <navigation-mob-comp v-if="windowMobile"></navigation-mob-comp>
    <navigation-desk-comp v-else></navigation-desk-comp>
    <h1>This is an about page</h1>
  </div>
</template>

<script>
const NavigationMob = () => import(/* webpackChunkName: "navigation-component" */ '@/components/NavigationMob.vue')
const NavigationDesk = () => import(/* webpackChunkName: "navigation-component" */ '@/components/NavigationDesk.vue')

export default {
  name: 'About',
  components: {
    'navigation-mob-comp': NavigationMob,
    'navigation-desk-comp': NavigationDesk
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

<style>

</style>
