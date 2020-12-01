import Vue from 'vue'
import Vuex from 'vuex'

Vue.use(Vuex)
const createStore = () => {
  return new Vuex.Store({
    state: {
   todos: [
       {
           title:"work",
           completed : false
       },
       {
        title:"status",
        completed : false
    }
   ]
    },
    mutations: {
     
     
    }
})
}

export default createStore