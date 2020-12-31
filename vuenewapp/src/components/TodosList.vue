<template>
  <div>
    <ToDo v-for="(todo,index) in todos" :key = "index" :todo="todo"/>
  </div>
</template>

<script>
import ToDo from "./ToDo";
import { mapGetters } from 'vuex';

export default {
  components: {
    ToDo,
  },
  computed:{
     ...mapGetters({
            todos:'doneTodos',
        })
  }
};
</script>
<style>
</style>