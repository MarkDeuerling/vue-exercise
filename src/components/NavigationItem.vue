<template>
  <v-list nav dense>
    <v-list-item v-for="(route, i) in routes" :key="i" router :to="route.link">
      <v-list-item-icon>
        <v-icon>{{ route.icon }}</v-icon>
      </v-list-item-icon>
      <v-list-item-title>{{ route.title }}</v-list-item-title>
    </v-list-item>
  </v-list>
</template>

<script>
export default {
  props: ['routes'],
}
</script>