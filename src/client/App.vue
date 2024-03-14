<script setup lang="ts">
import { computed } from '@vue/reactivity'
import { ref } from 'vue'
import Home from './components/Home.vue'
import SettingsView from './components/SettingsView.vue';
import CurrentMatches from './components/CurrentMatches.vue';
import TournamentOverview from './components/TournamentOverview.vue';
import TournamentsView from './components/TournamentsView.vue';
import TournamentEdit from './components/TournamentEdit.vue';

let router = new Map<string, object>()
router.set('/', TournamentsView) // Home
router.set('/settings', SettingsView)
router.set('/tournaments', TournamentsView)
router.set('/currentMatches', CurrentMatches)
router.set('/tournamentx', TournamentOverview)
router.set('/editTournament', TournamentEdit)

const currentPath = ref(window.location.hash)

window.addEventListener('hashchange', () => {
  currentPath.value = window.location.hash
})

const currentView = computed(() => {
  return router.get(currentPath.value.slice(1).split('?')[0] || '/') || Home
})
</script>

<template>
  <div class="flex nav">
    <a href="#/tournamentx" class="button pseudo">Tourniermodus</a>
    <a href="#/settings" class="button pseudo">Einstellungen</a>
    <a href="#/overview" class="button pseudo">Aktueller Stand</a>
    <a href="#/tournaments" class="button pseudo">Tourniere</a>
    <a href="#/hall" class="button pseudo">Hallenübersicht</a>
  </div>
    
  <component :is="currentView" />
</template>

<style lang="stylus" scoped>

</style>
