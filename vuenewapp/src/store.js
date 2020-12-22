import Vue from 'vue'
import Vuex from 'vuex'

Vue.use(Vuex)

  export default  new Vuex.Store({
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
        NEW_TODO(state,todoItem){
            state.todos.push({
                title:todoItem,
                completed : false
            })
        }
     
    },
    actions: {
        addNewTodo({commit},todoItem){ 
            commit('NEW_TODO',todoItem)  
        }
    }
})


