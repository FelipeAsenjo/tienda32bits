<template>
    <div class='container text-center d-flex flex-column justify-content-center'>
        <h1>Error 404</h1>
        <h3>Lo sentimos, la pagina que usted busca no existe</h3>
        <p> 
              <router-link class='nav-link' :to="{name: 'inicio'}">Volver al inicio</router-link>
        </p>
    </div>

</template>


<script>

</script>


<style scoped>

* {
    font-weight: 700;
    /*text-align: center;*/
}

.container {
    height: 100vh;
}

h1 {
    font-size: 5.0rem;
}

h3 {
    font-size: 3.0rem;
}
</style>
