<template>
   <div>
       <h2 v-for="a in articles" :key="a.id">{{a.title}}</h2> 
   </div>
</template>

<script>
   export default {
       name: '',
       data() {
           return {
           }
       },
       components: {
       },
       props: {
           articles: Array
       }
   }
</script>

<style scoped>
</style>