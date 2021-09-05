<template>
    <div class='container text-center mt-3'>
        <h1 v-text='title'></h1>
        <h2 v-text='subtitle'></h2>
    </div>
</template>
<script>
//import {mapState} from 'vuex'
export default {
    data() {
        return {

        }

    },
    computed: {
        title() {
            return 'Tienda 32bits'
        },
        subtitle() {
            return 'Juegos de PC y consolas'
        }
    }
}
</script>
