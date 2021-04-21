<template>
   <div class="tab-control">
       <div class="tab-control-item" v-for="(item, index) in titles" 
            :class="{active: index === currentIndex}" :key="'titles' + index"
            @click="itemClick(index)">
           <span>{{item}}</span>
       </div>
   </div>
</template>

<script>
   export default {
       name: 'TabControl',
       data() {
           return {
               currentIndex: 0
           }
       },
       methods: {
           itemClick(index){
               this.currentIndex = index
               this.$emit('tabClick', index)
           }
       },
       components: {
       },
       props: {
           titles: {
               type: Array,
               default(){
                   return []
               }
           }
       }
   }
</script>

<style scoped>
    .tab-control {
        display: flex;
        font-size: 15px;
        height: 40px;
        line-height: 40px;
        text-align: center;
        background-color: #fff;
    }
    .tab-control-item {
        flex: 1;
    }
    .tab-control-item span {
        padding: 3px 5px;
    }
    .active span{
        color: #c7585f;
        border-bottom: 2px solid #c7585f;
    }
</style>