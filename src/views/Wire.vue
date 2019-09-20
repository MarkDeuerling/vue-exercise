<template>
  <v-container>
    <Search/>
    <Table/>
  </v-container>
</template>

<script>
import Table from '@/components/Table'
import Search from '@/components/Search'

export default {
  components: {
    Table,
    Search,
  },
}
</script>
