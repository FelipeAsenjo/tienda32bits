<template>
    <div class='container text-center d-flex flex-column justify-content-center'>
        <h2>Total ventas: {{ totalVentas }}</h2>
        <ul class='my-4'>
            <li  v-for='(product, index) in ventas' :key='index'> 
                {{ product.codigo }} | {{ product.nombre }}
            </li>
        </ul>
    </div>

</template>


<script>
import { mapState } from 'vuex'
export default {
    computed: {
        ...mapState({
            ventas: state => state.ventas,
            totalVentas( state ) {
                let total = 0
                state.ventas.forEach( x => {
                    return total += x.precio
                } )
                return '$' + total
            }
        })
    }
}
</script>


<style>

.container {
    height: 100vh;
}
</style>
