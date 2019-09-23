<template>
  <v-container>
    <Search/>
    <WireTable/>
  </v-container>
</template>

<script>
import WireTable from '@/components/WireTable'
import Search from '@/components/Search'

export default {
  components: {
    WireTable,
    Search,
  },
}
</script>
