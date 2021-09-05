<template>
    <li class='p-2' :style='{backgroundColor: product.color}'>
        {{ renderList }}
        <input 
        :disabled='!inStock' 
        class='btn btn-light my-1 p-1' 
        type='button' 
        value='Vender' 
        @click="$emit('sellOne')"
        />
    </li>

</template>


<script>
export default {
    props: ['product', 'inStock'],
    computed: {
        renderList() {
            return Object.values(this.product).slice(0, -2).join(' | ')
        },
        
    }
}

</script>


<style>

li {
    position: relative;
}

.btn {
    position: absolute;
    right: 0.1rem;
    bottom: 0.1rem;

}

</style>
