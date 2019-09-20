<template>
  <v-navigation-drawer app clipped expand-on-hover permanent>
    <Avatar :imageSrc="avatar.imageSrc" :name="avatar.name" :email="avatar.email" />
    <v-divider></v-divider>
    <NavigationItem :routes="routes"/>
  </v-navigation-drawer>
</template>

<script>
import Avatar from '@/components/Avatar'
import NavigationItem from '@/components/NavigationItem'

export default {
  components: {
    Avatar,
    NavigationItem,
  },
  data: () => ({
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
        title: 'Favorieten',
        icon: 'mdi-star'
      },
    ]
  })
}
</script>