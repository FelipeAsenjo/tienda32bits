<template>
    <div class='container text-center d-flex flex-column justify-content-center'>
        <h2>Cantidad de juegos totales: {{ totalStock }}</h2>
        <h2>Cantidad de juegos vendidos: {{ ventas.length }}</h2>
    </div>

</template>


<script>
import { mapState } from 'vuex'
export default {
    data() {
        return {
            //juegosTotales: this.totalStock()
        }
    },
    computed: {
        ...mapState({
            ventas: state => state.ventas,
            totalStock( state ) {

                let total = 0
                state.productos.forEach( x => {

                    total += x.stock

                } )

                return total
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
