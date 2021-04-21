<template>
   <div>
       <h2>User模块</h2>
       <p>我是{{username}}用户</p>
   </div>
</template>

<script>
   export default {
       name: 'User',
       data() {
           return {

           }
       },
       computed: {
           username(){
               return this.$route.params.username
           }
       },
       components: {

       },
       created(){
            console.log("User created")
        },
        destroyed(){
            console.log("User destroy")
        }
   }
</script>

<style>
</style>