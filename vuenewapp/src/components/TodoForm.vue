<template>
  <div>
    <input type="text" v-model="newToDoItem"/>
    <button @click="addNewToDoItem">Submit</button>
  </div>
</template>

<script>

export default {
    name:"ToDoForm",
    data(){
        return {
            newToDoItem:""
        }
    },
    methods: {
       addNewToDoItem() {
          this.$store.dispatch('addNewTodo',this.newToDoItem)
        //  this.$router.push('/login')
       }
    }
};
</script>
<style>
</style>