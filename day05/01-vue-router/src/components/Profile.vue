<template>
   <div>
       <h2>我是Profile</h2>
       <p>{{name}}</p>
       <p>{{age}}</p>
       <p>{{email}}</p>
   </div>
</template>

<script>
   export default {
       name: 'Profile',
       data() {
           return {

           }
       },
       components: {

       },
       computed: {
           name(){
               return this.$route.query.name
           },
           age(){
               return this.$route.query.age
           },
           email(){
               return this.$route.query.email
           }
       },
       created(){
            console.log("Profile created")
        },
        destroyed(){
            console.log("Profile destroy")
        }
   }
</script>

<style>
</style>