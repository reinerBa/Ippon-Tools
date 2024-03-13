<script setup lang="ts">
import { ref } from 'vue';
import { Participant } from '../../models/Participant';

const t : Participant[] = [new Participant('Nils Müller', 'ESV', 0)]
const tournaments = ref(t)
const newName = ref('')
const newClub = ref('')

function refresh(){
    newName.value = ''
    newClub.value = ''
}

function create(){
    let newT = new Participant(newName.value, newClub.value, t.length)
    t.push(newT)
    refresh()
}
</script>

<template>
<main>
    <h1>Teilnehmer Management</h1>
    <div>
        <h3>Teilnehmer hinzufügen</h3>
        <form @submit.prevent="create" class="flex two">
            <label>Teilnehmername<input type="text" v-model="newName"/></label>
            <label>Teilnehmerverein<input type="text" v-model="newClub"/></label>
            <button>Erstellen</button>
            <button class="warning">Abbrechen</button>
        </form>
    </div>
    <div>
      <h2>Teilnehmer</h2>
      <div class="flex two">
    <span>Teilnehmer gemeldet {{ t.length }}</span>
    <span>Anzahl Vereine {{ [...new Set(t.map(te => te.SportClub))].length }}</span>
    <span>Teilnehmer ungewogen {{ t.filter(te => !te.Weight).length }}</span>
    <span>Teilnehmer gewogen {{ t.filter(te => !!te.Weight).length }}</span>
    <button>Listen erstellen</button>
      </div>
      <table>
        <thead>
            <tr><th>#</th><th>Name</th><th>Verein</th><th></th></tr>
        </thead>
        <tbody>
            <tr v-for="(t, idx) of tournaments" :key="'tou'+idx">
                <td>{{ t.numberOnList }}</td>
                <td>{{ t.Name }}</td>
                <td>{{ t.SportClub }}</td>
                <td><input type="number"/></td>
            </tr>
        </tbody>
      </table>
</div>
</main>
</template>

<style lang="stylus" scoped>

</style>