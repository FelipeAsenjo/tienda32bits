import Vue from 'vue';
import Vuex from 'vuex';

Vue.use(Vuex);

const store = new Vuex.Store({
  state: {
    productos: [
      {
        codigo: '0001',
        nombre: 'Sekiro',
        stock: 100,
        precio: 30000,
        color: 'red',
        destacado: true
      },
      {
        codigo: '0002',
        nombre: 'Fifa 21',
        stock: 100,
        precio: 25000,
        color: 'blue',
        destacado: false
      },
      {
        codigo: '0003',
        nombre: 'Gears of War 4',
        stock: 100,
        precio: 15000,
        color: 'green',
        destacado: true
      },
      {
        codigo: '0004',
        nombre: 'Mario Tennis Aces',
        stock: 100,
        precio: 35000,
        color: 'yellow',
        destacado: false
      },
      {
        codigo: '0005',
        nombre: 'Bloodborne',
        stock: 100,
        precio: 10000,
        color: 'blue',
        destacado: false
      },
      {
        codigo: '0006',
        nombre: 'Forza Horizon 4',
        stock: 100,
        precio: 20000,
        color: 'red',
        destacado: true
      },
    ],
    ventas: []
  },
  mutations: {

    registrarVenta: (state, producto) => {

        state.ventas.push({
          codigo: producto.codigo,
          nombre: producto.nombre,
          precio: producto.precio
        })
    }
  },
  actions: {
    sellProduct: ({ dispatch }, producto) => {
      
      return new Promise(() => {

        setTimeout(() => {

          dispatch('venderProducto', producto)
        }, 2000)
      })
      
    },
    venderProducto: ({state, commit}, producto) => {
      alert('Venta procesada')
      
      return new Promise(( resolve, reject ) => {

        state.productos.map( x => {
          if(x.codigo == producto.codigo) {
             x.stock--
          }
        } )

        setTimeout(() => {

            commit('registrarVenta', producto)
            if(state.ventas) {
              resolve()
            } else {
              reject()
            }
          }, 1000)
      })
    },
  }
});

export default store;
