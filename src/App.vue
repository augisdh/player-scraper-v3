<template>
  <v-app>
    <v-content>
      <router-view/>
    </v-content>
  </v-app>
</template>

<script>

export default {
  name: 'App',
  data () {
    return {
      mobileView: this.setView()
    }
  },
  mounted () {
    this.$nextTick(() => {
      window.addEventListener('resize', () => {
        this.mobileView = this.setView()
      })
    })
  },
  methods: {
    setView () {
      const screenWidth = document.documentElement.clientWidth
      return (screenWidth <= 750)
    }
  },
  beforeDestroy () {
    window.removeEventListener('resize', this.setView)
  }
}
</script>

<style>
#app {
  background-color: #fff;
}

.text-underline {
  text-decoration: underline;
}
.text-size-14 {
  font-size: 14px;
}
</style>
