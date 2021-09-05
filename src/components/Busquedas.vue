<template>
    <div class='container text-center mt-5'>
        <label class='me-3'>Busca tu juego</label>
        <input v-model.trim='search' type='number' placeholder='ej: 0004'/>

        <p>Cantidad de productos con stock: {{ inStock.length }} </p>

        <ul class='my-4'>
            <Products 
            v-for='(product, index) in matchGame' 
            :key='index' 
            :product='product' 
            :inStock='product.stock > 0'
            @sellOne='sellProduct(product)'
            />
        </ul>
    </div>

</template>


<script>
import Products from './Products.vue'
import { mapState, mapActions } from 'vuex'
export default {
    data() {
        return {
            search: '',
        }
    },
    components: {
        Products
    },
    methods: {
        ...mapActions(['sellProduct']),
    },
    computed: {
        ...mapState({
            products: state => state.productos,
            ventas: state => state.ventas,
            matchGame(state) { 
                
                let match = state.productos.find( x => x.codigo == this.search )  

                if( match ) {
                    return [match]
                }

                return state.productos
            },
            
            inStock: state => state.productos.filter( x => x.stock > 0 )
        })
    }
} 

</script>


<style>

ul {
    list-style: none;
}

</style>
