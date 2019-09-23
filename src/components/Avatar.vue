<template>
  <v-list>
    <v-list-item two-line>
      <v-list-item-avatar color="grey">
        <v-img v-if="image" :src="image"></v-img>
        <span v-else-if="initials" class="white--text">{{ initials }}</span>
        <v-icon v-else>mdi-account-circle</v-icon>
      </v-list-item-avatar>
      <v-list-item-content>
        <v-list-item-title class="title">{{ name }}</v-list-item-title>
        <v-list-item-subtitle>{{ email }}</v-list-item-subtitle>
      </v-list-item-content>
    </v-list-item>
  </v-list>
</template>

<script>
export default {
  props: ['image', 'name', 'email', 'initials']
}
</script>