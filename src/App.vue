<template>
  <div id="app">
    <!--<img alt="Vue logo" src="./assets/logo.png">-->
    <nav class="navbar navbar-expand-lg navbar-dark bg-dark">
      <div class="container-fluid">
        <router-link class='navbar-brand' :to="{name: 'inicio'}">32bitsStore</router-link>
        <button class="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarNav" aria-controls="navbarNav" aria-expanded="false" aria-label="Toggle navigation">
          <span class="navbar-toggler-icon"></span>
        </button>
        <div class="collapse navbar-collapse" id="navbarNav">
          <ul class="navbar-nav ms-auto">
            <li class="nav-item">
              <router-link class='nav-link' :to="{name: 'inicio'}">Inicio</router-link>
            </li>
            <li class="nav-item">
              <router-link class='nav-link' :to="{name: 'busquedas'}">Busquedas</router-link>
            </li>
            <li class="nav-item">
              <router-link class='nav-link' :to="{name: 'ventas'}">Ventas</router-link>
            </li>
            <li class="nav-item">
              <router-link class='nav-link' :to="{name: 'total'}">Total</router-link>
            </li>
          </ul>
        </div>
      </div>
    </nav>
    <transition name="vista">
      <router-view></router-view>
    </transition>
  </div>
</template>

<script>

export default {

}
</script>

<style scoped>

.vista-enter-active, .vista-leave-active {
    transition: opacity .1s;
}
.vista-enter, .vista-leave-to{
    opacity: 0;
}
</style>
