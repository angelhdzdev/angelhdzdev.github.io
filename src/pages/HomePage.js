export default {
    template: `
    <q-layout >
    <q-header>
        <q-toolbar>
        <q-toolbar-title>
        Home 
        </q-toolbar-title>
        </q-toolbar>
    </q-header>
    <q-page-container class="window-width window-height column items-center justify-center">
    <span class="text-h6">My First Vue 3 + Quasar Github Website</span>
    <q-btn @click="$q.notify({message: 'Click'})" color="primary" label="Click Me"></q-btn>
    </q-page-container>
    </q-layout>
    `,
    setup() {
        return {

        }
    }
}