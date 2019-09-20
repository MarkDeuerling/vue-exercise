<template>
  <v-container>
    <v-layout text-center wrap>
      <v-flex md4>
        <v-autocomplete
          v-model="select"
          label="Nach Einträgen suchen"
          prepend-icon="mdi-magnify"
          :items="items"
          chips
          class="ml-3"
          multiple
          cache-items
          :loading="loading"
          :search-input.sync="search"
          hide-no-data
          hide-details
          hide-selected
          auto-select-first
          clearable
          deletable-chips
        >
          <template v-slot:item="data">
            <v-list-item-content v-text="data.item"></v-list-item-content>
          </template>
        </v-autocomplete>
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
    items: [],
    search: null,
    select: null,
    loading: false,
    mockdata: ['test', 'some', 'other']
  }),
  methods: {
    querySelections(v) {
      this.loading = true
      setTimeout(() => {
        this.items = this.mockdata.filter(e => ((e || '').toLowerCase().indexOf((v || '').toLowerCase())) > -1)
        this.loading = false
      }, 500)
    }
  },
  watch: {
    search(val) {
      val && val !== this.select && this.querySelections(val)
    },
    select(){
      this.search = ''
    }
  }
}
</script>
