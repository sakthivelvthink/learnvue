<template>
   <div class="container">
     <form @submit.prevent="addSkill">
      <input type="text" placeholder="Enter a skill you have.."  v-model="skill">
    </form>
    <div class="holder">
      <ul>
        <li v-for="(data, index) in skills" :key='index'>{{data.skill}}</li>
      </ul>
      <p>These are the skills that you possess.</p>
    </div>
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
  },
   methods : {
      addSkill(){
          this.skills.push({skill: this.skill});
          this.skill = '';
      }
  }
}
</script>

<style  scoped>
 .holder {
    background: #fff;
  }

  ul {
    margin: 0;
    padding: 0;
    list-style-type: none;
  }
  
  ul li {
    padding: 20px;
    font-size: 1.3em;
    background-color: #E0EDF4;
    border-left: 5px solid #3EB3F6;
    margin-bottom: 2px;
    color: #3E5252;
  }

  p {
    text-align:center;
    padding: 30px 0;
    color: gray;
  }

  .container {
    box-shadow: 0px 0px 40px lightgray;
  }
  input {
    width: calc(100% - 40px);
    border: 0;
    padding: 20px;
    font-size: 1.3em;
    background-color: #323333;
    color: #687F7F;
  }
</style>
