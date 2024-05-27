// store/index.js
import { createStore } from 'vuex';

export default createStore({
  state: {
    carrito: []
  },
  mutations: {
    AGREGAR_AL_CARRITO(state, { producto, cantidad }) {
      const item = state.carrito.find(item => item.producto.id_producto === producto.id_producto);
      if (item) {
        item.cantidad += cantidad;
      } else {
        state.carrito.push({ producto, cantidad });
      }
    },
    QUITAR_DEL_CARRITO(state, id_producto) {
      state.carrito = state.carrito.filter(item => item.producto.id_producto !== id_producto);
    },
    ACTUALIZAR_CANTIDAD(state, { id_producto, cantidad }) {
      const item = state.carrito.find(item => item.producto.id_producto === id_producto);
      if (item) {
        item.cantidad = cantidad;
        if (item.cantidad <= 0) {
          state.carrito = state.carrito.filter(item => item.producto.id_producto !== id_producto);
        }
      }
    }
  },
  actions: {
    agregarAlCarrito({ commit }, { producto, cantidad }) {
      commit('AGREGAR_AL_CARRITO', { producto, cantidad });
    },
    quitarDelCarrito({ commit }, id_producto) {
      commit('QUITAR_DEL_CARRITO', id_producto);
    },
    actualizarCantidad({ commit }, { id_producto, cantidad }) {
      commit('ACTUALIZAR_CANTIDAD', { id_producto, cantidad });
    }
  }
});
