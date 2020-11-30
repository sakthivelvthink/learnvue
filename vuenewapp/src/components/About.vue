<template>
    <div class="about">
    <h1>This is an about page</h1>
    <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna ali...</p>
  </div>
</template>

<script>
export default {
  name: 'About',
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
