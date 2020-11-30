<template>
  <div class="skills">
   <h1 v-once>{{name}}</h1>

    <!-- Add this -->
    {{ btnState ? 'The button is disabled' : 'The button is active'}}
    <button v-on:click="changeName" v-bind:disabled="btnState">Change Name</button>
  </div>
</template>

<script>
export default {
  name: 'Skills',
 data() {
    return {
      name: 'Sakthivel',
      btnState: true,
      skills: [
          { "skill": "Vue.js" },
          { "skill": "Frontend Developer" }
      ]
    }
  }
}
</script>

<style  scoped>
h3 {
  margin: 40px 0 0;
}
ul {
  list-style-type: none;
  padding: 0;
}
li {
  display: inline-block;
  margin: 0 10px;
}
a {
  color: #42b983;
}
</style>
