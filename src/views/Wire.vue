<template>
  <v-container>
    <v-layout text-center wrap>
      <v-flex md4>
        <v-text-field
            v-model="search"
            append-icon="mdi-magnify"
            label="Nach Einträgen suchen"
            single-line
            class='ml-3'
          ></v-text-field>
      </v-flex>
    </v-layout>
    <Table/>
  </v-container>
</template>

<script>
import Table from '@/components/Table'

export default {
  components: {
    Table
  },
  data: () => ({
    search: null
  })
}
</script>
