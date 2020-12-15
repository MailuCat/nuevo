import Vue from 'vue'
import Vuex from 'vuex'

Vue.use(Vuex)

export default new Vuex.Store({
  state: {
    datosApi: [],
    favorito: []
  },
  getters:{
    enviarDatosApi(state){
      return state.datosApi;
    },
    enviarFavorito(state){
      return state.favorito;
    },
  },
  mutations: {
    mutandoDatosApi(state,datos){
        state.datosApi = datos;
    },
    mutandoFavorito(state,valor){
      state.favorito.push(valor)
    }
  },
   actions:{
    async llamadoAPI({commit}){
      try {
        let result = await fetch('https://rickandmortyapi.com/api/character/')
        let datos = await result.json();
        commit('mutandoDatosApi',datos.results);
      } catch (error) {
        console.error(error);
      }
    },
    agregarFavorito({commit}, valor){
        commit('mutandoFavorito',valor)
    },
  }
})