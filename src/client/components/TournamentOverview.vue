<script setup lang="ts">
import { ref } from 'vue';
import Tournament from '../../models/Tournament';

const t : Tournament[] = []
const tournaments = ref(t)
const newName = ref('')
const newUrl = ref('')
const newContactEmail = ref('')
const newRegistrationDeadline = ref('')

function refresh(){
    newName.value = ''
    newUrl.value = ''
    newContactEmail.value = ''
    newRegistrationDeadline.value = ''
}

function create(){
    let newT = new Tournament(newName.value, newRegistrationDeadline.value)
    newT.Url = newUrl.value
    newT.ContactEmail = newContactEmail.value
    t.push(newT)
    refresh()
}
</script>

<template>
<main>
    <h1>Tournier Management</h1>
    <div>
        <h3>Neues Tournier erstellen</h3>
        <form @submit.prevent="create" class="flex two">
            <label>Tourniername<input type="text" v-model="newName" placeholder="Name"/></label>
            <label>Anmeldungs URL<input type="text" v-model="newUrl" placeholder="Anmelde url"/></label>
            <label>Kontakt Email<input type="email" v-model="newContactEmail" placeholder="Kontakt Email"/></label>
            <label>Meldeschluss<input type="date" v-model="newRegistrationDeadline" placeholder="Anmeldung bis"/></label>
            <button>Erstellen</button>
            <button class="warning">Abbrechen</button>
        </form>
    </div>
    <div class="flex three">
      <h2>Tourniere</h2>
    <article v-for="(t, idx) of tournaments" :key="'tou'+idx" class="card">
        <header>
            <h3>{{ t.Name }}</h3>
        </header>
        <div>
            <div>Meldeschluß: {{ t.registrationDeadline }}</div>
            <div v-if="t.Url">Url: {{ t.Url }}</div>
            <div>Kontakt Email: {{ t.ContactEmail }}</div>
        </div>
        <footer>
            <button>Ausfüllen</button>
            <button class="error">Löschen</button>
        </footer>
    </article>
</div>
</main>
</template>

<style lang="stylus" scoped>
article
  border 1px solid lightgrey
</style>