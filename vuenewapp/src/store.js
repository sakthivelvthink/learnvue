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
    },
   ],
   showSignup: true
    },
    mutations: {
        NEW_TODO(state,todoItem){
            state.todos.push({
                title:todoItem,
                completed : false
            })
        },
        SHOW_SIGNUP_PAGE(state,showSignUp){
            state.showSignup = showSignUp
        }
     
    },
    actions: {
        addNewTodo({commit},todoItem){ 
            commit('NEW_TODO',todoItem)  
        },
        showSignUp({commit},showSignUp){
            commit('SHOW_SIGNUP_PAGE',showSignUp)
        }

    }
})


