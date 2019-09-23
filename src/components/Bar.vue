<template>
  <v-app-bar app clipped-left dense>
    <v-app-bar-nav-icon 
      @click.stop="drawer"
      class="d-flex d-sm-none"
    >
    </v-app-bar-nav-icon>
    <v-toolbar-title class="headline text-uppercase">
      <span>Kabelliste</span>
      <span class="font-weight-light ml-3">POC Potsdam</span>
    </v-toolbar-title>
    <v-spacer></v-spacer>
    <v-btn @click="onChangeTheme">
      <span class="mr-2">Change Theme</span>
    </v-btn>
  </v-app-bar>
</template>

<script>
export default {
  methods: {
    onChangeTheme() {
      this.$vuetify.theme.dark = !this.$vuetify.theme.dark
    }
  }
}
</script>

<style>

</style>