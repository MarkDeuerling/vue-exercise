<template>
  <v-container>
    <v-layout>
      <v-flex>
        <v-data-table
          :headers='headers'
          :items='wires'
          :items-per-page='5'
          @click:row='showDetails'
          class='elevation-5'
        >
        </v-data-table>
      </v-flex>
    </v-layout>
  </v-container>
</template>

<script>
import wires from '@/mock/wire'
export default {
  data: () => ({
    headers: [
      {text: 'Kabel-Nummer', align: 'left', sortable: true, value: 'nr'},
      {text: 'Art', align: 'left', sortable: true, value: 'type'},
      {text: 'Länge', align: 'left', sortable: true, value: 'length'},
      {text: 'Geändert am', align: 'left', sortable: true, value: 'changed'},
      {text: 'Status', align: 'left', sortable: true, value: 'state'},
    ],
    wires
  }),
  methods: {
    showDetails(e) {
      console.log(e)
      this.$router.push({name: 'wireDetail'})
    }
  }
}
</script>

<style>

</style>