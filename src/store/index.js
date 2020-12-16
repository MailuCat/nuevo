import Vue from 'vue'
import Vuex from 'vuex'

Vue.use(Vuex)

export default new Vuex.Store({
  state: {
    datosApi: [],
    favorito: [],
    opinion:  []
  },
  getters:{
    enviarDatosApi(state){
      return state.datosApi;
    },
    enviarFavorito(state){
      return state.favorito;
    },
    enviarOpinion(state){
      return state.opinion;
    }

  },
  mutations: {
    mutandoDatosApi(state,datos){
        state.datosApi = datos;
    },
    mutandoFavorito(state,valor){
      state.favorito.push(valor)
    },
    mutandoEliminarFa (state,index){
      state.favorito.splice(index,1)
    },
    mutandoOpinion (state,palabras){
      state.opinion.push(palabras)
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
    eliminarFavorito({commit}, index){
      commit('mutandoEliminarFa', index)
    },
    guardarOpinion({commit}, palabras){
      commit('mutandoOpinion', palabras)
    }
  }
})