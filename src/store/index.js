import Vue from 'vue'
import Vuex from 'vuex'

Vue.use(Vuex)

export default new Vuex.Store({
  state: {
    datosApi: [],
  },
  getters:{
    enviarDatosApi(state){
      return state.datosApi;
    }
  },
  mutations: {
    mutandoDatosApi(state,datos){
        state.datosApi = datos;
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
  }
})