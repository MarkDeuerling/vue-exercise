<template>
  <v-app>
    <Bar/>
    <Navigation/>
    <v-content>
      <router-view/>
    </v-content>
  </v-app>
</template>

<script>
import Navigation from '@/components/Navigation'
import Bar from '@/components/Bar'

export default {
  components: {
    Navigation,
    Bar
  },
};
</script>
