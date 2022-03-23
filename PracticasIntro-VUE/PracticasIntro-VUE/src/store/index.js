import { createStore } from 'vuex'

export default createStore({
  state: {
    tipo: 'tipo De pastel',
    nombreDePastel: 'nombre aqui',
    Precio: '$0.00',
    ingredientes: 'hecho de..',
    pasteles: [ ],
    pastel: null
  },
  getters: {
     nuevoPastel(state){
      return  `${state.tipo} ${state.nombreDePastel} ${state.Precio} ${state.ingredientes}`
    }
  },
  mutations: {
    addPastel(state){
      state.pasteles = [state.pastel,...state.pasteles]
    }
  },
  actions: {
    addPastelAction( context ){
      context.commit('addPastel');
    }
  },
  modules: {

  }
})
