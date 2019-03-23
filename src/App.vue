<template>
  <v-app>
    <v-content>
      <router-view/>
    </v-content>
  </v-app>
</template>

<script>

export default {
  name: 'App'
}
</script>

<style>
#app {
  background-color: #fff;
}
.h-100 {
  height: 100%;
}
.text-underline {
  text-decoration: underline;
}
.text-size-14 {
  font-size: 14px;
}
.flex-d {
  display: flex;
}
.t-overflow {
  text-overflow: ellipsis;
  overflow: hidden;
}
.c-pointer {
  cursor: pointer;
}
</style>
