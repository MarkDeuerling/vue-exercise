<template>
  <v-container>
    <v-layout>
      <v-flex>
        <v-data-table
          :headers='headers'
          :items='wires'
          :items-per-page='5'
          @click:row='showAlert'
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
    ],
    wires
  }),
  methods: {
    showAlert() {
      alert('Will direct to wire view')
    }
  }
}
</script>

<style>

</style>