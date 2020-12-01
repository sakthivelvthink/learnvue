<template>
  <div>
    <input type="text" :v-model="newToDoItem"/>
    <button>Submit</button>
  </div>
</template>

<script>
export default {
    data(){
        return {
            newToDoItem:""
        }
    }
};
</script>

<style>
</style>