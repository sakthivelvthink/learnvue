<template>
  <div>
    <input type="text" v-model="newToDoItem"/>
    <button @click="addNewToDoItem">Submit</button>
  </div>
</template>

<script>
import {mapMutations} from 'vuex'
export default {
    name:"ToDoForm",
    data(){
        return {
            newToDoItem:""
        }
    },
    methods: {
      ...mapMutations({
        addTodoItem:'NEW_TODO'
      }),
       addNewToDoItem() {
          this.addTodoItem(this.newToDoItem)
       }
    }
};
</script>
<style>
</style>