<template>
  <div>
    <ToDo v-for="(todo,index) in todos" :key = "index" :todo="todo"/>
  </div>
</template>

<script>
import ToDo from "./ToDo";
export default {
  components: {
    ToDo,
  },
  computed:{
      todos() {
          return this.$store.state.todos
      }
  }
};
</script>
<style>
</style>