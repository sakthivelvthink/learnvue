<template>
  <div>
    <ProfileImageComponent/>
  </div>
</template>

<script>
import ProfileImageComponent from "./ProfileImageComponent"
export default {
    name:"LoginComponent",
    components:{
    ProfileImageComponent
    },
    data(){
        return {
            newToDoItem:""
        }
    },
  mounted () {
   let uri = 'https://api.first.org/data/v1/countries?region=africa&limit=3&pretty=true';
this.axios.get(uri).then((response) => {
  console.log(response.data)
})
      
  },
    methods: {
       addNewToDoItem() {
           this.$store.dispatch('addNewTodo',this.newToDoItem)
       }
    }
};
</script>
<style>
</style>