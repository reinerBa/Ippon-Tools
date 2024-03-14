<script lang="ts" setup>
import { onMounted, ref } from 'vue'
import { DefaultService } from '../apis';
import { useQuery } from '@tanstack/vue-query';

const tournamentKey = ref('')
let parts0 = window.location.hash.split('?')
  if(parts0.length >= 2) {
    tournamentKey.value = parts0[1].substring(4)
  }

  async function fetcher(){
    return await DefaultService.getApiMatchGetTournament(tournamentKey.value)
  }

  const { isPending, isError, isFetching, data, error, refetch } = useQuery({
    queryKey: ['tournaments'],
    queryFn: fetcher
  })

</script>

<template>
<article>
  {{ tournamentKey }}
  {{ data }}
</article>
</template>