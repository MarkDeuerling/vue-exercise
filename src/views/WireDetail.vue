<template>
  <v-container class="fill-height">
    <v-row justify='center' align="center">
      <h1>Detail view of wire coming soon ...</h1>
    </v-row>
    
  </v-container>
</template>

<script>
export default {
  props: ['id'],
  mounted() {
    console.log("mouted")
    console.log(this.id)
  },
  created() {
    console.log("created")
    console.log(this.id)
  }
}
</script>