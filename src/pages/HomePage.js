export default {
    template: `
    <q-layout >
    <q-header>
        <q-toolbar>
        <q-toolbar-title>
        Home - Angel Hdz Multimedia
        </q-toolbar-title>
        </q-toolbar> 
    </q-header>
    <q-page-container class="window-width window-height column q-gutter-md items-center justify-center">
    <span class="text-h6">Welcome to Angel Hdz Multimedia.</span>
    <span class="text-h4 text-negative"><q-icon name="warning"></q-icon>Website Under Construction!</span>
    <q-btn @click="$q.notify({message: 'Click'})" color="primary" label="Click Me"></q-btn>
    </q-page-container>
    </q-layout>
    `,
    setup() {
        return {

        }
    }
}