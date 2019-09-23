<template>
<v-container>
  <v-app-bar app clipped-left dense>
    <v-app-bar-nav-icon 
      @click.stop="drawer = !drawer"
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

  <v-navigation-drawer 
    app 
    clipped
    :temporary="$vuetify.breakpoint.smAndDown" 
    :permanent="$vuetify.breakpoint.mdAndUp"
    :expand-on-hover="$vuetify.breakpoint.mdAndUp"
    v-model="drawer"
  >
    <Avatar :imageSrc="avatar.imageSrc" :name="avatar.name" :email="avatar.email" />
    <v-divider></v-divider>
    <NavigationItem :routes="routes"/>
  </v-navigation-drawer>
</v-container>
 
</template>

<script>
import Avatar from '@/components/Avatar'
import NavigationItem from '@/components/NavigationItem'

export default {
  components: {
    Avatar,
    NavigationItem,
  },
  methods: {
    onChangeTheme() {
      this.$vuetify.theme.dark = !this.$vuetify.theme.dark
    }
  },
  data: () => ({
    drawer: null,
    avatar: {
      imageSrc: 'https://randomuser.me/api/portraits/women/85.jpg',
      name: 'Sandra Adams',
      email: 'sandra_a88@gmail.com'
    },
    routes: [
      {
        link: '/',
        title: 'Dashboard',
        icon: 'mdi-view-dashboard'
      },
      {
        link: 'wire',
        title: 'Kabelliste',
        icon: 'mdi-ethernet-cable'
      },
      {
        link: '',
        title: 'Favoriten',
        icon: 'mdi-star'
      },
    ]
  })
}
</script>