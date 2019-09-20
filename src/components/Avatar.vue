<template>
  <v-list>
    <v-list-item two-line>
      <v-list-item-avatar>
        <v-img :src="imageSrc"></v-img>
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
  props: ['imageSrc', 'name', 'email']
}
</script>