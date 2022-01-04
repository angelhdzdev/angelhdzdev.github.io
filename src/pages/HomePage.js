export default {
    template: `
    <q-layout >
    <q-header>
        <q-toolbar>
        <q-toolbar-title>
        Angel Hdz Dev - Home 
        </q-toolbar-title>
        </q-toolbar> 
    </q-header>
    <q-page-container class="window-width window-height column items-center justify-center">
    <span class="text-h6">Welcome to Angel Hdz Dev.</span>
    <span class="text-h4">Site under construction.</span>
    <q-btn @click="$q.notify({message: 'Click'})" color="negative" label="Click Me"></q-btn>
    </q-page-container>
    </q-layout>
    `,
    setup() {
        return {

        }
    }
}