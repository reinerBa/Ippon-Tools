<script lang="ts" setup>
import { useQuery } from '@tanstack/vue-query'
import { DefaultService } from '../apis'
import { useDateFormat } from '../composables/DateFormat';

const { formatDate } = useDateFormat()
const { isPending, isError, isFetching, data, error, refetch } = useQuery({
    queryKey: ['tournaments'],
    queryFn: DefaultService.getApiMatchGetTournamentsShort
  })

</script>

<template>
  <h1>Tourniere</h1>
    
  <div v-if="isPending || isFetching">Loading...</div>
  <div v-else-if="isError">An error has occurred: {{ error }}</div>
  <div v-else-if="data"  class="flex three">
    <article v-for="(t, idx) of data" :key="'tou'+idx" class="card">
      <header>Tournier: {{ t.Name }} <a :href="'#/editTournament?key=' + t.Key" class="button"><i class="material-icons">edit</i></a></header>
      <div v-for="(c, idx) of t.Competitions" :key="'co'+idx" class="card">
        <header>{{ c.Name }}</header>
        <ul>
          <li >
          {{ c.Name }} am {{ formatDate(c.EventDate) }}
          <p>Gewichtsklassen: {{ c.WeightClasses.join(', ') }}</p>
          <p>Gemeldet: {{ c.ParticipantsCount }}</p>
        </li>
      </ul>
    </div>   
    <footer>
      <button>
        <i class="material-icons">add_circle_outline</i>
        Wettkampf hinzufügen
      </button>
    </footer> 
    </article>
  </div>
</template>

<style lang="stylus" scoped>
.card
  margin 1em
header > a
  margin-left auto
  right 0
  float right
header
  padding-bottom 1.5em

</style>
