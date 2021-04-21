<template>
   <div class="recommonds">
       <div v-for="(item, index) in recommonds" :key="'recommonds' + index" class="recommonds-item">
           <a :href="item.link">
               <img :src="item.img" @load="recommondsImgLoaded"/>
               <div>{{item.title}}</div>
           </a>
       </div>
   </div>
</template>

<script>
   export default {
       name: 'RecommondView',
       data() {
           return {
               isLoaded: false
           }
       },
       components: {
       },
       props: {
           recommonds: {
               type: Array,
               default(){
                   return []
               }
           }
       },
       methods: {
           recommondsImgLoaded(){
               if(!this.isLoaded){
                    //发送推荐版块图片已加载事件
                    this.$emit("recommondsImgLoaded")
                    this.isLoaded = true
                }
           }
       }
   }
</script>

<style scoped>
    .recommonds {
        display: flex;
        margin: 10px 0 15px;
        padding-bottom: 5px;
        border-bottom: 15px solid #bbb;
        width: 100%;
        text-align: center;
        
    }
    .recommonds-item {
        flex: 1;
    }
    .recommonds-item img {
        width: 70px;
        height: 70px;
        margin-bottom: 10px;
    }
</style>